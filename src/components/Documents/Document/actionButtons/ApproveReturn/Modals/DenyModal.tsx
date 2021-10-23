import React, { useState } from 'react';
import Button from '@ff/ui-kit/lib/Button';
import Modal from '@ff/ui-kit/lib/Modal';
import TextAreaField from '@ff/ui-kit/lib/TextAreaField';

import classes from '../ApproveReturn.module.scss';

import ModalWindow from '../../../../../../models/ModalWindow';


interface Deny extends ModalWindow{
action:  (reason: string) => void
}

const ModalDeny: React.FC<Deny> = (props) => {
  const [text, setText] = React.useState('');
  const { status, close, action } = props;

  const deny = () => {
    action(text);
    setText('');
    close()
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
