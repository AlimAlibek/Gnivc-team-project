import React, { useState } from 'react';
import Button from '@ff/ui-kit/lib/Button';
import Modal from '@ff/ui-kit/lib/Modal';
import TextAreaField from '@ff/ui-kit/lib/TextAreaField';

import classes from '../ApproveReturn.module.scss';
import Status from '../../../../../../models/Status';
import ModalWindow from '../../../../../../models/ModalWindow';
import documentStore from '../../../../../../stores/documentStore';

const ModalDeny: React.FC<ModalWindow> = (props) => {
  const [text, setText] = React.useState('');
  const { setStatus, addComent } = documentStore;
  const { status, close } = props;

  const deny = () => {
    setStatus(Status.REFACTORING);
    addComent(`Отправил на доработку причина: ${text}`);
    setText('');
  };
  const denyContent = (
    <div className={classes.modal}>
      <TextAreaField
        name="Test"
        placeholder="Текстовое поле"
        value=""
        size="large"
        onChange={(e) => setText(e.target.value)}
        fullWidth
      />

      <div className={classes.buttons}>
        <Button variant="outline" type="primary" onClick={close}>
          Отмена
        </Button>
        <Button type="primary" onClick={deny}>
          Отправить
        </Button>
      </div>
    </div>
  );
  return (
    <Modal
      visible={status}
      title="Укажите причину, по которой происходит возврат на доработку:"
    >
      {denyContent}
    </Modal>
  );
};
export default ModalDeny;
