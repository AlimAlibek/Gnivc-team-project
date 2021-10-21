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
  const toggleDeny = () => {
    setDenyOpen(!denyOpen);
  };

  const toggleRedirect = () => {
    setRedirectOpen(!redirectOpen);
  };


  return (
    <div className={classes.buttonsRow}>
      <ModalDeny status={denyOpen} close={toggleDeny} />
      <ModalRedirect status={redirectOpen} close={toggleRedirect} />
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
};
export default ApproveReturn;
