import React from 'react';
import Button from '@ff/ui-kit/lib/Button';
import { observer } from 'mobx-react';

import userStore from '../../../../../stores/userStore';
import Status from '../../../../../models/Status';
import ModalDeny from './Modals/DenyModal';
import ModalRedirect from './Modals/RedirectModal';
import classes from './ApproveReturn.module.scss';
import documentStore from '../../../../../stores/documentStore';
import Access from '../../../../../models/Access';

const ApproveReturn: React.FC = observer(() => {
  const [denyOpen, setDenyOpen] = React.useState(false);
  const [redirectOpen, setRedirectOpen] = React.useState(false);
  const {
    version,
    setStatus,
    addComent,
    approveDPP,
    approveUIB,
    approveUIT,
    approveFKU,
    setActiveRewier
  } = documentStore;
  const { userName, role } = userStore;
  const activeReviewer=version?.activeReviewer

  const dispathApprove = () => {
    if (!role) return;
    switch (role) {
      case Access.DPP:
      return approveDPP(userName);
            case Access.UIB:
        return approveUIB(userName);
      case Access.UIT:
        return approveUIT(userName);
  
        default:
      return approveFKU(userName)
    }
  };

  const approve = () => {
    dispathApprove()
    addComent('Принял документ');
  };
  const toggleDeny = () => {
    setDenyOpen(!denyOpen);
  };

  const toggleRedirect = () => {
    setRedirectOpen(!redirectOpen);
  };

  
  if(userName!==activeReviewer){
    return <Button onClick={()=>setActiveRewier(userName)}>Жмякни меня </Button>
  }

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
});
export default ApproveReturn;
