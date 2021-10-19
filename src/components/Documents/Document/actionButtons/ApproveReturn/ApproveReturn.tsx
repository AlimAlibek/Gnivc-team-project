import React from 'react';
import Button from '@ff/ui-kit/lib/Button';

import Status from '../../../../../models/Status';
import documentStore from '../../../../../stores/documentStore';
import userStore from '../../../../../stores/userStore';

const ApproveReturn: React.FC = () => {
  const { setStatus, addComent } = documentStore;
  const { name } = userStore;
  const approve = () => {
    setStatus(Status.APPROVED);
    addComent(name, 'Принял документ');
  };
  const deny = () => {
    setStatus(Status.REFACTORING);
    addComent(name, 'Отправил на доработку');
  };
  return (
    <div className="buttons-row">
      <Button onClick={approve} variant="fill" type="primary">
        Согласовать
      </Button>
      <Button variant="outline" type="primary" onClick={deny}>
        Вернуть на доработку
      </Button>
    </div>
  );
};
export default ApproveReturn;
