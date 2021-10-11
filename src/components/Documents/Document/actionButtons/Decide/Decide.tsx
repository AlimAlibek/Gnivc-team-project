import { Button } from '@ff/ui-kit';
import React from 'react';
import documentVersionStore from '../../../../../stores/documentVersionStore';
import Status from '../../../../../models/enums/Status';

import classes from '../../DocumentItem.module.scss';

interface SendButton {
  again:boolean
}


const Decide: React.FC<SendButton> = ({again}) => {
  const {setStatus}=documentVersionStore
  const sendToApproval=()=>{
    setStatus(Status.APPROVING)
  }
  const sendButtonText=again? `Повторно отправить на согласование` :`Отправить на согласование`
  const deleteButton=again? null: <Button variant="outline" type="primary">
      Удалить
    </Button>
  return(
  <div className={classes.buttons_row}>
    <Button variant="fill" type="primary" onClick={sendToApproval}>
      {sendButtonText}
    </Button>
   {deleteButton}
  </div>
)};
export default Decide;
