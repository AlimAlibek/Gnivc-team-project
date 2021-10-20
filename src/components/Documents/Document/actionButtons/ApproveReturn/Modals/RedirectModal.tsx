import React from 'react';
import Button from '@ff/ui-kit/lib/Button';
import Modal from '@ff/ui-kit/lib/Modal';
import Select from '@ff/ui-kit/lib/Select';

import classes from '../ApproveReturn.module.scss';
import ModalWindow from '../../../../../../models/ModalWindow';

const ModalRedirect: React.FC<ModalWindow> = (props) => {
  const { status, close } = props;
  const options = [
    { key: 1, value: 'first', label: 'Значение первое' },
    { key: 2, value: 'second', label: 'Значение второе' },
    { key: 3, value: 'third', label: 'Значение третье' },
  ];
  const redirectContent = (
    <div className={classes.modal}>
      <Select
        label="Роль"
        options={options}
        floatingLabel
        style={{ width: '400px', marginBottom: '1em' }}
      />
      <div className={classes.buttons}>
        <Button variant="outline" type="primary" onClick={close}>
          Отмена
        </Button>
        <Button type="primary" onClick={() => {}}>
          Отправить
        </Button>
      </div>
    </div>
  );
  return (
    <Modal
      width="500px"
      visible={status}
      title="Выберите роль ответственного за согласование:"
    >
      {redirectContent}
    </Modal>
  );
};
export default ModalRedirect;
