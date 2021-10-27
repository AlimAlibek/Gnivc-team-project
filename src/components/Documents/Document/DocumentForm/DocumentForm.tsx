import React from 'react';
import Typography from '@ff/ui-kit/lib/esm/components/Typography';
import Select from '@ff/ui-kit/lib/esm/components/Select';
import TextField from '@ff/ui-kit/lib/esm/components/TextField';
import { observer } from 'mobx-react';
import { isArray } from 'lodash';

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
  const {
    filterByRole, users, selectedUser, userName,
  } = userStore;
  const editors = filterByRole(Access.EDITOR);

  const editorOptions = editors
    ? mapUsersIntoOptions(editors)
    : [
      { key: 1, value: 'userGorbunov1', label: 'Владимир Горбунов' },
      { key: 2, value: 'userHmelnikov2', label: 'Борис Хмельников' },
    ];

  if (!documentStore.version) return <div />;
  const {
    contour, priority, packageType, gk, activeReviewer, status, responsibleUserName,
  } = documentStore.version;
  const blocked = selectedUser
    ? isFieldsBlocked(selectedUser, status, activeReviewer, userName)
    : true;

  const changeLabel = (newName: string) => {
    if (documentStore.version) documentStore.version.label = newName;
  };
  const shownResponsible = users.find((el) => el.userName === responsibleUserName);

  const setResponsible = (newUserName: string | string[]) => {
    const findName = users.find((el) => el.userName === newUserName);
    if (documentStore.version && findName?.name && !isArray(newUserName)) {
      documentStore.version.responsibleUserName = newUserName;
      documentStore.version.responsiblePerson = findName.name;
    }
  };
  const changeVersionCode = (newCode: string) => {
    if (documentStore.version) documentStore.version.versionCode = newCode;
  };
  const changePriority = (newPriority: string | string[]) => {
    if (!isArray(newPriority) && documentStore.version) { documentStore.version.priority = newPriority; }
  };
  const changeContur = (newContur: string | string[]) => {
    if (!isArray(newContur) && documentStore.version) { documentStore.version.contour = newContur; }
  };
  const changePackageType = (newPackage: string | string[]) => {
    if (!isArray(newPackage) && documentStore.version) { documentStore.version.packageType = newPackage; }
  };
  const changeGk = (newGk: string | string[]) => {
    if (!isArray(newGk) && documentStore.version) { documentStore.version.gk = newGk; }
  };

  return (
    <div className={classes.component}>
      <Typography className={classes.subtitle}>Аттрибуты пакета</Typography>

      <TextField
        name="floating-label"
        label="Наименование"
        disabled={blocked}
        labelStyle="floating"
        value={documentStore.version.label}
        onChange={(e) => changeLabel(e.target.value)}
        fullWidth
      />
      <div className={classes.flex}>
        <Select
          label="Контур"
          disabled={blocked}
          options={conturSelect}
          value={contour}
          onChange={(e) => changeContur(e)}
          floatingLabel
          showSearch
          fullWidth
        />
      </div>
      <div className={classes.flex}>
        <Select
          label="Приоритет"
          disabled={blocked}
          options={prioritySelect}
          value={priority}
          onChange={(e) => changePriority(e)}
          floatingLabel
          showSearch
          fullWidth
        />
      </div>

      <div className={classes.flex}>
        <Select
          label="Тип пакета"
          disabled={blocked}
          value={packageType}
          options={packSelect}
          onChange={(e) => changePackageType(e)}
          floatingLabel
          showSearch
          style={{ width: '46%' }}
        />

        <Select
          label="Пункт ГК"
          disabled={blocked}
          options={gkSelect}
          value={gk}
          onChange={(e) => changeGk(e)}
          floatingLabel
          showSearch
          style={{ width: '27%' }}
        />

        <TextField
          label="Код версии"
          disabled={blocked}
          name="floating-label"
          labelStyle="floating"
          value={documentStore.version.versionCode}
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
