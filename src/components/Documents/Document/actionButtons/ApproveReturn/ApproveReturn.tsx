import React from 'react';
import { Button } from '@ff/ui-kit';
import documentVersionStore from '../../../../../stores/documentVersionStore';
import Status from '../../../../../models/enums/Status'

const ApproveReturn: React.FC = () => {
  const {setStatus, addComent}=documentVersionStore
const approve=()=>{setStatus(Status.APPROVED)
addComent('Принял документ')}
const deny=()=>{setStatus(Status.REFACTORING)
addComent('Отправил на доработку')}
  return (
  <div className="buttons-row">
    <Button onClick={approve} variant="fill" type="primary"> 
      Согласовать
    </Button>
    <Button variant="outline" type="primary" onClick={deny}>
      Вернуть на доработку
    </Button>
  </div>)}
;
export default ApproveReturn;
