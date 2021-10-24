import React from 'react';
import Typography from '@ff/ui-kit/lib/esm/components/Typography';
import Select from '@ff/ui-kit/lib/esm/components/Select';
import TextField from '@ff/ui-kit/lib/esm/components/TextField';
import { observer } from 'mobx-react';

import conturSelect from '../../../../content/contur';
import gkSelect from '../../../../content/gk';
import packSelect from '../../../../content/package';
import prioritySelect from '../../../../content/priority';
import classes from './DocumentForm.module.scss';
import documentStore from '../../../../stores/documentStore';
import { isArray } from 'lodash';

const DocumentForm: React.FC =observer( () => {
  const {  isBlocked } = documentStore;
  if(!documentStore.version) return <div></div>
  const {contour, priority,packageType,gk }=documentStore.version

  const changeLabel=(newName:string)=>{
    if(documentStore.version) documentStore.version.label=newName
  }
    const changeVersionCode=(newCode:string)=>{
    if(documentStore.version) documentStore.version.versionCode=newCode
  }
  const changePriority=(newPriority:string|string[])=>{
    if(!isArray(newPriority)&&documentStore.version) documentStore.version.priority=newPriority
  }
  const changeContur=(newContur:string|string[])=>{
if(!isArray(newContur)&&documentStore.version)
documentStore.version.contour=newContur
  }
  const changePackageType=(newPackage:string|string[])=>{
    if(!isArray(newPackage)&&documentStore.version)
    documentStore.version.packageType=newPackage
  }
    const changeGk=(newGk:string|string[])=>{
    if(!isArray(newGk)&&documentStore.version)
    documentStore.version.gk=newGk
  }


  return (
    <div className={classes.component}>
      <Typography className={classes.subtitle}>Аттрибуты пакета</Typography>

      <TextField
        name="floating-label"
        label="Наименование"
        disabled={isBlocked()}
        labelStyle="floating"
        value={documentStore.version.label}
        onChange={(e)=>changeLabel(e.target.value)}
        fullWidth
      />
      <div className={classes.flex}>
        <Select
          label="Контур"
          disabled={isBlocked()}
          options={conturSelect}
          value={contour}
          onChange={e=>changeContur(e)}
          floatingLabel
          showSearch
          fullWidth
        />
      </div>
      <div className={classes.flex}>
        <Select
          label="Приоритет"
          disabled={isBlocked()}
          options={prioritySelect}
          value={priority}
          onChange={(e)=>changePriority(e)}
          floatingLabel
          showSearch
          fullWidth
        />
      </div>

      <div className={classes.flex}>
        <Select
          label="Тип пакета"
          disabled={isBlocked()}
          value={packageType}
          options={packSelect}
          onChange={(e)=>changePackageType(e)}
          floatingLabel
          showSearch
          style={{ width: '46%' }}
        />

        <Select
          label="Пункт ГК"
          disabled={isBlocked()}
          options={gkSelect}
          value={gk}
          onChange={(e)=>changeGk(e)}
          floatingLabel
          showSearch
          style={{ width: '27%' }}
        />

        <TextField
          label="Код версии"
          disabled={isBlocked()}
          name="floating-label"
          labelStyle="floating"
          value={documentStore.version.versionCode}
          onChange={e=>changeVersionCode(e.target.value)}
          size="large"
          className={classes.version}
        />
      </div>

      <Select
        label="Ответственный"
        options={[
          { key: 1, value: 'Владимир Горбунов', label: 'Владимир Горбунов' },
          { key: 2, value: 'Борис Хмельников', label: 'Борис Хмельников' },
        ]}
        fullWidth
        floatingLabel
        disabled={isBlocked()}
        showSearch
      />

      <div className={classes.flex}>
        <TextField
          name="floating-label"
          label="Роль в проекте"
          labelStyle="floating"
          className={classes.blocked}
          value="Архитектор"
          disabled
        />
        <TextField
          name="floating-label"
          label="Подразделение"
          labelStyle="floating"
          className={classes.blocked}
          value="IT-архитектуры"
          disabled
        />
      </div>
    </div>
  );
});

export default DocumentForm;
