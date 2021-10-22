import React from 'react';
import clsx from 'clsx';

import classes from '../../DocumentItem.module.scss';
import Access from '../../../../../models/Access';
import Decide from '../Decide';
import ApproveReturn from '../ApproveReturn';
import userStore from '../../../../../stores/userStore';

const ActionButtons: React.FC = () => {
  const { role } = userStore;
  return (
    <div className={clsx(classes.row, classes.underline, classes.mrb)}>
      {role === Access.EDITOR && <Decide />}
      {role === Access.DPP && <ApproveReturn />}
    </div>
  );
};
export default ActionButtons;
