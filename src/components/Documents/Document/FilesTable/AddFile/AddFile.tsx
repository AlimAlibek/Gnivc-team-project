import React, { useState } from 'react';
import Button from '@ff/ui-kit/lib/Button';

import ModalFile from '../ModalFile';
import classes from './AddFile.module.scss';

const AddFile: React.FC<{ onClick: () => void }> = ({ onClick }) =>
  // const [openModal, setOpenModal] = useState(false);
  // const toggleModal = () => {
  //   setOpenModal(!openModal);
  // };
  (
    <div className={classes.addFile}>
      {/* <ModalFile status={openModal} close={toggleModal} /> */}
      <Button onClick={onClick} variant="outline" type="primary">
        <div className={classes.button} role="application">
          <i className="sr-0010-circle-plus" />
          <span>Добавить файл</span>
        </div>
      </Button>
    </div>
  );
export default AddFile;
