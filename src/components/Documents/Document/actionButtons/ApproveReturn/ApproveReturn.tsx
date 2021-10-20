import React from 'react';
import Button from '@ff/ui-kit/lib/Button';

import Status from '../../../../../models/Status';
import ModalDeny from './Modals/DenyModal';
import ModalRedirect from './Modals/RedirectModal';
import classes from './ApproveReturn.module.scss';
import documentStore from '../../../../../stores/documentStore';

const ApproveReturn: React.FC = () => {
  const [denyOpen, setDenyOpen] = React.useState(false);
  const [redirectOpen, setRedirectOpen] = React.useState(false);
  const { setStatus, addComent } = documentStore;

  const approve = () => {
    setStatus(Status.APPROVED);
    addComent('Принял документ');
  };
  const closeDeny = () => {
    setDenyOpen(false);
  };
  const openDeny = () => {
    setDenyOpen(true);
  };
  const closeRedirect = () => {
    setRedirectOpen(false);
  };
  const openRedirect = () => {
    setRedirectOpen(true);
  };

  return (
    <div className={classes.buttonsRow}>
      <ModalDeny status={denyOpen} close={closeDeny} />
      <ModalRedirect status={redirectOpen} close={closeRedirect} />
      <Button onClick={approve} variant="fill" type="primary">
        Согласовать
      </Button>
      <Button type="primary" onClick={openRedirect}>
        Перенаправить
      </Button>
      <Button variant="outline" type="primary" onClick={openDeny}>
        Вернуть на доработку
      </Button>
    </div>
  );
};
export default ApproveReturn;
