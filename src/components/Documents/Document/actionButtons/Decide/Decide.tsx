import Button from '@ff/ui-kit/lib/Button';
import React, { useState } from 'react';
import Modal from '@ff/ui-kit/lib/Modal';

import classes from './Decide.module.scss';
import Status from '../../../../../models/Status';
import createComment from '../../../../../utils/createComment';
import documentStore from '../../../../../stores/documentStore';
import userStore from '../../../../../stores/userStore';

const Decide: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { status, setStatus, addComent } = documentStore;
  const { name } = userStore;
  const toggleModal = () => setOpen(!open);
  const sendToApproval = () => {
    setStatus(Status.APPROVING);
    const comment = createComment('Отправил на согласование', name);
    addComent(comment);
  };

  return (
    <div className={classes.component}>
      <Modal width="500px" visible={open} title="Отправить на согласование?">
        <div className={classes.buttons}>
          <Button type="primary" onClick={sendToApproval}>Да</Button>
          <Button variant="outline" type="primary" onClick={toggleModal}>Нет</Button>
        </div>
      </Modal>
      <Button variant="fill" type="primary" onClick={toggleModal}>
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
