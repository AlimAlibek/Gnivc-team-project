import React, { useState } from 'react';
import Button from '@ff/ui-kit/lib/Button';

import ModalFile from '../../FilesTable/ModalFile';
import classes from '../../DocumentItem.module.scss';

const AddFile: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const toggleModal = () => {
    setOpenModal(!openModal);
  };
  return (
    <div className={classes.row}>
      <ModalFile status={openModal} close={toggleModal} />
      <Button variant="outline" type="primary">
        <div className={classes.buttonWithIcon} onClick={toggleModal} role="application">
          <i className="sr-0010-circle-plus" />
          <span>Добавить файл</span>
        </div>
      </Button>
    </div>
  );
};

export default AddFile;
