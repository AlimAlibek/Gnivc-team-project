import React from 'react';

import classes from '../../DocumentItem.module.scss';
import Access from '../../../../../models/Access';
import Decide from '../Decide';
import ApproveReturn from '../ApproveReturn';
import Status from '../../../../../models/Status';
import FkuDispath from '../FkuDispath';

type ActionButtonsProps = {
  role?: Access;
  status: Status;
};

const ActionButtons: React.FC<ActionButtonsProps> = ({ role, status }) => (
  <div className={classes.actionButtons}>
    {role === Access.EDITOR && <Decide />}
    {status === Status.APPROVING && role !== Access.DISPATCH && (
      <ApproveReturn />
    )}
    {role === Access.DISPATCH && <FkuDispath />}
  </div>
);
export default ActionButtons;
