import Button from '@ff/ui-kit/lib/Button';
import React from 'react';

import classes from '../../DocumentItem.module.scss';
import Status from '../../../../../models/Status';
import documentStore from '../../../../../stores/documentStore';
import userStore from '../../../../../stores/userStore';

const Decide: React.FC = () => {
  const { status, setStatus, addComent } = documentStore;
  const { name } = userStore;
  const sendToApproval = () => {
    setStatus(Status.APPROVING);
    addComent('Отправил на согласование');
  };
  return (
    <div className={classes.buttons_row}>
      <Button variant="fill" type="primary" onClick={sendToApproval}>
        {status === Status.REFACTORING
          ? 'Повторно отправить на согласование'
          : 'Отправить на согласование'}
      </Button>
      {status !== Status.REFACTORING && (
        <Button variant="outline" type="primary">
          Удалить
        </Button>
      )}
    </div>
  );
};
export default Decide;
