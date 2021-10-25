import React, { useState } from 'react';
import Button from '@ff/ui-kit/lib/Button';
import Modal from '@ff/ui-kit/lib/Modal';

import documentStore from '../../../../../stores/documentStore';
import classes from './SaveCancel.module.scss';

const SaveCancel: React.FC = () => {
  const [open, setOpen] = useState(false);
  const toggleModal = () => {
    setOpen(!open);
  };
  const { saveAndSend, documentPackage } = documentStore;
  const allowDelete = documentPackage ? (documentPackage?.versions.length > 1) : false;
  const saveIt = () => {
    saveAndSend();
    toggleModal();
  };
  const saveContent = (
    <div className={classes.modal}>
      <div className={classes.buttonsRow}>
        <Button type="primary" onClick={saveIt}>
          Да
        </Button>
        <Button variant="outline" type="primary" onClick={toggleModal}>
          Нет
        </Button>
      </div>
    </div>
  );

  return (
    <div className={classes.buttonsRow}>
      <Modal
        width="500px"
        visible={open}
        title="Сохранить внесенные изменения?"
      >
        {saveContent}
      </Modal>
      <Button variant="fill" type="primary" onClick={toggleModal}>
        Сохранить
      </Button>
      {allowDelete && (
      <Button variant="outline" type="primary" onClick={() => documentStore.deleteVersion()}>
        Удалить
      </Button>
      )}
    </div>
  );
};
export default SaveCancel;
