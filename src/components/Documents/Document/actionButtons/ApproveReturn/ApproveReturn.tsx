import React, { useState } from 'react';
import Button from '@ff/ui-kit/lib/Button';
import Modal from '@ff/ui-kit/lib/Modal';
import TextAreaField from '@ff/ui-kit/lib/TextAreaField';
import Select from '@ff/ui-kit/lib/Select';

import Status from '../../../../../models/Status';
import classes from './ApproveReturn.module.scss';
import documentStore from '../../../../../stores/documentStore';
import userStore from '../../../../../stores/userStore';

const ApproveReturn: React.FC = () => {
  const [denyOpen, setDenyOpen] = React.useState(false);
  const [redirectOpen, setRedirectOpen] = React.useState(false);
  const [denyText, setDenyText] = React.useState('');
  const { setStatus, addComent } = documentStore;

  const approve = () => {
    setStatus(Status.APPROVED);
    addComent('Принял документ');
  };
  const deny = () => {
    setStatus(Status.REFACTORING);
    addComent(`Отправил на доработку причина: ${denyText}`);
    setDenyText('');
  };
  const closeDeny = () => {
    setDenyOpen(false);
  };
  const openDeny = () => {
    setDenyOpen(true);
  };
  const closeRedirect = () => {
    setRedirectOpen(false);
  };
  const openRedirect = () => {
    setRedirectOpen(true);
  };

  const options = [
    { key: 1, value: 'first', label: 'Значение первое' },
    { key: 2, value: 'second', label: 'Значение второе' },
    { key: 3, value: 'third', label: 'Значение третье' },
  ];
  const denyContent = (
    <div className={classes.modal}>
      <TextAreaField
        name="Test"
        placeholder="Текстовое поле"
        value=""
        size="large"
        onChange={(e) => setDenyText(e.target.value)}
        fullWidth={true}
      />

      <div className={classes.buttons}>
        <Button variant="outline" type="primary" onClick={closeDeny}>
          Отмена
        </Button>
        <Button type="primary" onClick={deny}>
          Отправить
        </Button>
      </div>
    </div>
  );

  const redirectContent = (
    <div className={classes.modal}>
      <Select
        label="Роль"
        options={options}
        floatingLabel
        style={{ width: '400px', marginBottom: '1em' }}
      />

      <Select
        label="Организация"
        options={options}
        floatingLabel
        style={{ width: '400px', marginBottom: '1em' }}
      />
      <div className={classes.buttons}>
        <Button variant="outline" type="primary" onClick={closeRedirect}>
          Отмена
        </Button>
        <Button type="primary" onClick={() => {}}>
          Отправить
        </Button>
      </div>
    </div>
  );

  return (
    <div className="buttons-row">
      <Modal
        visible={denyOpen}
        title="Укажите причину, по которой происходит возврат на доработку:"
      >
        {denyContent}
      </Modal>
      <Modal
        width={`500px`}
        visible={redirectOpen}
        title="Выберите роль ответственного за согласование:"
      >
        {redirectContent}
      </Modal>
      <Button onClick={approve} variant="fill" type="primary">
        Согласовать
      </Button>
      <Button type="primary" onClick={openRedirect}>
        Перенаправить
      </Button>
      <Button variant="outline" type="primary" onClick={openDeny}>
        Вернуть на доработку
      </Button>
    </div>
  );
};
export default ApproveReturn;
