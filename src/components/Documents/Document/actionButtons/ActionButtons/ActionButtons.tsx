import React from 'react';
import clsx from 'clsx';

import classes from '../../DocumentItem.module.scss';
import Access from '../../../../../models/Access';
import documentStore from '../../../../../stores/documentStore';
import Decide from '../Decide';
import ApproveReturn from '../ApproveReturn';
import Status from '../../../../../models/Status';
import userStore from '../../../../../stores/userStore';
import FkuDispath from '../FkuDispath';

const ActionButtons: React.FC = () => {
  const { role } = userStore;
  const { status } = documentStore;
  return (
    <div className={clsx(classes.row, classes.underline, classes.mrb)}>
      {role === Access.EDITOR && <Decide />}
      {status === Status.APPROVING && role !== Access.DISPATCH && <ApproveReturn />}
      {role === Access.DISPATCH && <FkuDispath /> }
    </div>
  );
};
export default ActionButtons;
