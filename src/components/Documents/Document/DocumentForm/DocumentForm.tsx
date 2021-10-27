import React from 'react';
import Typography from '@ff/ui-kit/lib/esm/components/Typography';
import Select from '@ff/ui-kit/lib/esm/components/Select';
import TextField from '@ff/ui-kit/lib/esm/components/TextField';
import { observer } from 'mobx-react';
import { isArray } from 'lodash';

import DocumentSelector from './Selector';
import conturSelect from '../../../../content/contur';
import isFieldsBlocked from '../../../../utils/isFieldsBlocked';
import gkSelect from '../../../../content/gk';
import packSelect from '../../../../content/package';
import prioritySelect from '../../../../content/priority';
import classes from './DocumentForm.module.scss';
import documentStore from '../../../../stores/documentStore';
import userStore from '../../../../stores/userStore';
import mapUsersIntoOptions from '../../../../utils/mapUsersIntoOptions';
import Access from '../../../../models/Access';

const DocumentForm: React.FC = observer(() => {
  const { filterByRole, users, selectedUser, userName } = userStore;
  const editors = filterByRole(Access.EDITOR);

  const editorOptions = editors
    ? mapUsersIntoOptions(editors)
    : [
        { key: 1, value: 'userGorbunov1', label: 'Владимир Горбунов' },
        { key: 2, value: 'userHmelnikov2', label: 'Борис Хмельников' },
      ];

  if (!documentStore.version) return <div />;
  const {
    setResponsiblePerson,
    setVersionCode,
    setLabel,
    setPriority,
    setContur,
    setPackageType,
    setGk,
  } = documentStore;
  const {
    contour,
    label,
    priority,
    packageType,
    gk,
    activeReviewer,
    status,
    versionCode,
    responsibleUserName,
  } = documentStore.version;

  const blocked = selectedUser
    ? isFieldsBlocked(selectedUser, status, activeReviewer, userName)
    : true;

  const changeLabel = (newName: string) => setLabel(newName);

  const shownResponsible = users.find(
    (el) => el.userName === responsibleUserName
  );

  const setResponsible = (newUserName: string | string[]) => {
    const findName = users.find((el) => el.userName === newUserName);
    if (findName?.name && !isArray(newUserName)) {
      setResponsiblePerson(newUserName, findName.name);
    }
  };
  const changeVersionCode = (newCode: string) => setVersionCode(newCode);

  const changePriority = (newPriority: string | string[]) => {
    if (!isArray(newPriority)) setPriority(newPriority);
  };

  const changeContur = (newContur: string | string[]) => {
    if (!isArray(newContur)) setContur(newContur);
  };

  const changePackageType = (newPackage: string | string[]) => {
    if (!isArray(newPackage)) setPackageType(newPackage);
  };

  const changeGk = (newGk: string | string[]) => {
    if (!isArray(newGk)) setGk(newGk);
  };

  return (
    <div className={classes.component}>
      <Typography className={classes.subtitle}>Аттрибуты пакета</Typography>

      <TextField
        name="floating-label"
        label="Наименование"
        disabled={blocked}
        labelStyle="floating"
        value={label}
        onChange={(e) => changeLabel(e.target.value)}
        fullWidth
      />
      <div className={classes.flex}>
        <DocumentSelector
          label={'Контур'}
          options={conturSelect}
          disabled={blocked}
          action={changeContur}
          value={contour}
        />
      </div>
      <div className={classes.flex}>
        <DocumentSelector
          label={'Приоритет'}
          options={prioritySelect}
          disabled={blocked}
          action={changePriority}
          value={priority}
        />
      </div>

      <div className={classes.flex}>
        <DocumentSelector
          label={'Тип пакета'}
          options={packSelect}
          disabled={blocked}
          action={changePackageType}
          value={packageType}
          style={{ width: '46%' }}
        />
        <DocumentSelector
          label={'Пункт Г.К.'}
          options={gkSelect}
          disabled={blocked}
          action={changeGk}
          value={gk}
          style={{ width: '27%' }}
        />

        <TextField
          label="Код версии"
          disabled={blocked}
          name="floating-label"
          labelStyle="floating"
          value={versionCode}
          onChange={(e) => changeVersionCode(e.target.value)}
          size="large"
          className={classes.version}
        />
      </div>

      <Select
        label="Ответственный"
        value={responsibleUserName}
        options={editorOptions}
        onChange={(e) => setResponsible(e)}
        fullWidth
        floatingLabel
        disabled={blocked}
        showSearch
      />

      <div className={classes.flex}>
        <TextField
          name="floating-label"
          label="Роль в проекте"
          labelStyle="floating"
          className={`${classes.blocked}`}
          value={shownResponsible?.projectRole}
          disabled
        />
        <TextField
          name="floating-label"
          value={shownResponsible?.department}
          label="Подразделение"
          labelStyle="floating"
          className={classes.blocked}
          disabled
        />
      </div>
    </div>
  );
});

export default DocumentForm;
