import React from 'react';
import Button from '@ff/ui-kit/lib/Button';
import { observer } from 'mobx-react';

import userStore from '../../../../../stores/userStore';
import Status from '../../../../../models/Status';
import approveSwicher from '../../../../../utils/approveSwicher';
import ModalDeny from './Modals/DenyModal';
import ModalRedirect from './Modals/RedirectModal';
import classes from './ApproveReturn.module.scss';
import documentStore from '../../../../../stores/documentStore';

const ApproveReturn: React.FC = observer(() => {
  const [denyOpen, setDenyOpen] = React.useState(false);
  const [redirectOpen, setRedirectOpen] = React.useState(false);
  const {
    version, addComent, setActiveRewier, setStatus,
  } = documentStore;
  const { userName, role, filterByMyRole } = userStore;
  const activeReviewer = version?.activeReviewer;

  const approve = () => {
    approveSwicher(role, userName);
    addComent('Принял документ');
  };
  const toggleDeny = () => {
    setDenyOpen(!denyOpen);
  };

  const deny = (reason: string) => {
    setStatus(Status.REFACTORING);
    addComent(`Отправил на доработку причина: ${reason}`);
  };

  const setReviewer = (name: string) => {
    setActiveRewier(name);
  };
  const toggleRedirect = () => {
    setRedirectOpen(!redirectOpen);
  };
  const redirectUsers = filterByMyRole();

  if (userName !== activeReviewer) {
    return (
      <Button type="primary" onClick={() => setReviewer(userName)}>
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
      <Button onClick={approve} variant="fill" type="primary">
        Согласовать
      </Button>
      <Button type="primary" onClick={toggleRedirect}>
        Перенаправить
      </Button>
      <Button variant="outline" type="primary" onClick={toggleDeny}>
        Вернуть на доработку
      </Button>
    </div>
  );
});
export default ApproveReturn;
