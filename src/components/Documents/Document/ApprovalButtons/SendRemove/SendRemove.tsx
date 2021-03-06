import Button from '@ff/ui-kit/lib/Button';
import React, { useState } from 'react';
import Modal from '@ff/ui-kit/lib/Modal';
import { useHistory } from 'react-router-dom';

import classes from './SendRemove.module.scss';
import Status from '../../../../../models/Status';
import documentStore from '../../../../../stores/documentStore';
import userStore from '../../../../../stores/userStore';
import isActionBlocked from '../../../../../utils/isActionBlocked';

const SendRemove: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { name } = userStore;
  const {
    documentPackage: doc,
    version,
    status,
    setStatus,
    addComment,
    removeVersion,
    deleteDocument,
    setAprrovalDate,
  } = documentStore;
  const blocked = version ? isActionBlocked(version) : true;
  const toggleModal = () => setOpen(!open);
  const sendToApproval = () => {
    setAprrovalDate();
    setStatus(Status.APPROVING);
    if (!version?.approvedStartAt) setAprrovalDate();
    addComment('Отправил на согласование', name);
  };
  const history = useHistory();

  const allowDeleteVersion = doc ? (doc.versions.length > 1 && status === Status.SCATCH) : false;
  const allowDeleteDocument = doc
    ? doc.versions.length === 1 && status === Status.SCATCH
    : false;

  const deletePackage = () => {
    deleteDocument();
    history.push('/home');
  };

  return (
    <div className={classes.component}>
      <Modal width="500px" visible={open} title="Отправить на согласование?">
        <div className={classes.buttons}>
          <Button type="primary" onClick={sendToApproval}>
            Да
          </Button>
          <Button variant="outline" type="primary" onClick={toggleModal}>
            Нет
          </Button>
        </div>
      </Modal>
      <Button variant="fill" type="primary" onClick={toggleModal} disabled={blocked}>
        {status === Status.REFACTORING
          ? 'Повторно отправить на согласование'
          : 'Отправить на согласование'}
      </Button>
      {allowDeleteVersion && (
        <Button
          variant="outline"
          type="primary"
          onClick={() => removeVersion()}
        >
          Удалить
        </Button>
      )}
      {allowDeleteDocument && (
        <Button variant="outline" type="primary" onClick={deletePackage}>
          Удалить пакет
        </Button>
      )}
    </div>
  );
};
export default SendRemove;
