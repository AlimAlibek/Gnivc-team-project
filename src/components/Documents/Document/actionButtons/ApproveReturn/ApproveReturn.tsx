import React from 'react';
import { Button } from '@ff/ui-kit';
import documentVersionStore from '../../../../../stores/documentVersionStore';
import Status from '../../../../../models/enums/Status'

const ApproveReturn: React.FC = () => {
  const {setStatus}=documentVersionStore
const approve=()=>setStatus(Status.APPROVED)
const deny=()=>setStatus(Status.REFACTORING)
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
