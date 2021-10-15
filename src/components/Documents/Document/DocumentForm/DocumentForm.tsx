import React from 'react';
import clsx from 'clsx';

import classes from '../DocumentItem.module.scss';
import documentVersionStore from '../../../../stores/documentVersionStore';
import userStore from '../../../../stores/userStore';
import NameInput from './NameInput';
import Responsible from './Responsible';
import ResponsibleRole from './ResponsibleRole';
import TypeInput from './TypeInput';

const DocumentForm: React.FC = () => {
  const { version } = documentVersionStore;
  const { selectedUser } = userStore;
  const role: string = selectedUser?.role ? selectedUser?.role : 'reader';
  const disabled: boolean = role !== 'editor' || version?.status === 'approved';

  return (
    <>

      <div className={classes.block__row}>
        <NameInput
          isDisbled={disabled}
          onChange={() => {}}
        />
      </div>

      <div className={clsx(classes.row, classes.edge)}>
        <TypeInput
          isDisbled={disabled}
          onChange={() => {}}
        />
      </div>

      <div className={classes.block__row}>
        <Responsible
          isDisbled={disabled}
          onChange={() => {}}
        />
      </div>
      <div
        className={clsx(classes.row, classes.edge, classes.mrb)}
      >
        <ResponsibleRole />
      </div>

    </>
  );
};

export default DocumentForm;
