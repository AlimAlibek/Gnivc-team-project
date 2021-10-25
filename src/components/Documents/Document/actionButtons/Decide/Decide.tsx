import Button from '@ff/ui-kit/lib/Button';
import React from 'react';

import classes from './Decide.module.scss';
import Status from '../../../../../models/Status';
import createComment from '../../../../../utils/createComment';
import documentStore from '../../../../../stores/documentStore';
import userStore from '../../../../../stores/userStore';

const Decide: React.FC = () => {
  const { status, setStatus, addComent } = documentStore;
  const { name } = userStore;

  const sendToApproval = () => {
    setStatus(Status.APPROVING);
    const comment = createComment('Отправил на согласование', name);
    addComent(comment);
  };

  return (
    <div className={classes.buttonsRow}>
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
