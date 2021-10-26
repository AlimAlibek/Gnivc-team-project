import React, { useState } from 'react';
import { observer } from 'mobx-react';
import Button from '@ff/ui-kit/lib/Button';
import Modal from '@ff/ui-kit/lib/Modal';
import { useHistory } from 'react-router-dom';

import documentStore from '../../../../../stores/documentStore';
import classes from './SaveCancel.module.scss';
import Status from '../../../../../models/Status';

const SaveCancel: React.FC = observer(() => {
  const {
    documentPackage: doc,
    status,
    saveAndSend,
    removeVersion,
    deleteDocument,
  } = documentStore;
  const [open, setOpen] = useState(false);
  const history = useHistory();

  const allowDeleteVersion = doc ? doc.versions.length > 1 : false;
  const toggleModal = () => setOpen(!open);
  const saveIt = () => {
    saveAndSend();
    toggleModal();
  };

  const deletePackage = () => {
    deleteDocument();
    history.push('/home');
  };

  const allowDeleteDocument = doc
    ? doc.versions.length === 1 && status === Status.SCATCH
    : false;

  const saveContent = (
    <div className={classes.modal}>
      {/*  prettier-ignore */}
      <div className={classes.buttonsRow}>
        <Button type="primary" onClick={saveIt}>Да</Button>
        <Button variant="outline" type="primary" onClick={toggleModal}>Нет</Button>
      </div>
    </div>
  );

  return (
    <div className={classes.buttonsRow}>
      {/*  prettier-ignore */}
      <Modal width="500px" visible={open} title="Сохранить внесенные изменения?">
        {saveContent}
      </Modal>
      {/*  prettier-ignore */}
      <Button variant="fill" type="primary" onClick={toggleModal}>Сохранить</Button>
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
});
export default SaveCancel;
