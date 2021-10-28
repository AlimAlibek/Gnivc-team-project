import React from 'react';

import classes from './ApprovalButtons.module.scss';
import Access from '../../../../models/Access';
import Decide from './SendRemove';
import ApproveReturn from './ApproveReturn';
import Status from '../../../../models/Status';
import FkuDispath from './FkuDispath';

type ActionButtonsProps = {
  role?: Access;
  status: Status;
};

const ApprovalButtons: React.FC<ActionButtonsProps> = ({ role, status }) => (
  <div className={classes.actionButtons}>
    {role === Access.EDITOR && <Decide />}
    {status === Status.APPROVING && role !== Access.DISPATCH && (
      <ApproveReturn />
    )}
    {role === Access.DISPATCH && <FkuDispath />}
  </div>
);
export default ApprovalButtons;
