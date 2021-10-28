import React, { useState } from 'react';
import { observer } from 'mobx-react';
import Button from '@ff/ui-kit/lib/Button';

import classes from './ApproveReturn.module.scss';
import Status from '../../../../../models/Status';
import approveSwicher from '../../../../../utils/approveSwicher';
import ModalDeny from './Modals/DenyModal';
import ModalRedirect from './Modals/RedirectModal';
import documentStore from '../../../../../stores/documentStore';
import userStore from '../../../../../stores/userStore';
import ModalApprove from './Modals/ApproveModal';
import isActionBlocked from '../../../../../utils/isActionBlocked';

const ApproveReturn: React.FC = observer(() => {
  const {
    version, addComment, setActiveRewier, setStatus,
  } = documentStore;
  const {
    userName, role, filterByMyRole, name
  } = userStore;

  const [denyOpen, setDenyOpen] = useState(false);
  const [redirectOpen, setRedirectOpen] = useState(false);
  const [approveOpen, setApproveOpen] = useState(false);

  const blocked = version ? isActionBlocked(version) : true;
  const activeReviewer = version?.activeReviewer;
  const toggleApprove = () => setApproveOpen(!approveOpen);
  const approve = () => {
    approveSwicher(role, userName);
    addComment('Принял(а) документ', name);
    toggleApprove();
  };
  const toggleDeny = () => setDenyOpen(!denyOpen);

  const deny = (reason: string) => {
    addComment(`Отправил(а) на доработку причина: ${reason}`, name);
    setStatus(Status.REFACTORING);
  };

  const setReviewer = (namee: string) => setActiveRewier(namee);
  const toggleRedirect = () => setRedirectOpen(!redirectOpen);
  const redirectUsers = filterByMyRole();

  if (userName !== activeReviewer) {
    return (
      <Button
        type="primary"
        onClick={() => setReviewer(userName)}
        style={{ fontSize: '14px' }}
      >
        Взять в работу
      </Button>
    );
  }

  return (
    <div className={classes.buttonsRow}>
      <ModalDeny status={denyOpen} close={toggleDeny} action={deny} />
      {redirectUsers && (
        <ModalRedirect
          status={redirectOpen}
          close={toggleRedirect}
          users={redirectUsers}
          choose={setReviewer}
        />
      )}
      <ModalApprove
        status={approveOpen}
        close={toggleApprove}
        action={approve}
      />
      {/* prettier-ignore */}
      <Button onClick={toggleApprove} variant="fill" disabled={blocked} type="primary">Согласовать</Button>
      {/* prettier-ignore */}
      <Button type="primary" disabled={blocked} onClick={toggleRedirect}>Перенаправить</Button>
      {/* prettier-ignore */}
      <Button variant="outline" type="primary" disabled={blocked} onClick={toggleDeny}>Вернуть на доработку</Button>
    </div>
  );
});
export default ApproveReturn;
