import React, { useState } from 'react';
import { observer } from 'mobx-react';
import Button from '@ff/ui-kit/lib/Button';
import Modal from '@ff/ui-kit/lib/Modal';

import documentStore from '../../../../../stores/documentStore';
import classes from './SaveCancel.module.scss';


const SaveCancel: React.FC = observer(() => {
  const {
  cancelChanges,
    saveAndSend,
  } = documentStore;
  const [open, setOpen] = useState(false);


  const toggleModal = () => setOpen(!open);
  const saveIt = () => {
    saveAndSend();
    toggleModal();
  };

  const cancelButton=()=>{
    cancelChanges()
//  if(doc)fetchDocument(doc.id);
}


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
     <Button variant="outline" type="primary" onClick={cancelButton}>Отменить</Button>
    </div>
  );
});
export default SaveCancel;
