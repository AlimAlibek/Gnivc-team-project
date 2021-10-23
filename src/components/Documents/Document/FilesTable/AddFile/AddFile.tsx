import React, { useState } from 'react';
import Button from '@ff/ui-kit/lib/Button';

import ModalFile from '../ModalFile';
import classes from './AddFile.module.scss';

const AddFile: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const toggleModal = () => {
    setOpenModal(!openModal);
  };
  return (
    <div className={classes.addFile}>
      <ModalFile status={openModal} close={toggleModal} />
      <Button variant="outline" type="primary">
        <div className={classes.button} onClick={toggleModal} role="application">
          <i className="sr-0010-circle-plus" />
          <span>Добавить файл</span>
        </div>
      </Button>
    </div>
  );
};

export default AddFile;
