import React, { useState } from 'react';
import Button from '@ff/ui-kit/lib/Button';
import Modal from '@ff/ui-kit/lib/Modal';
import Select from '@ff/ui-kit/lib/Select';
import { isArray } from 'lodash';

import User from '../../../../../../models/User';
import mapUsersIntoOptions from '../../../../../../utils/mapUsersIntoOptions';
import classes from '../ApproveReturn.module.scss';
import ModalWindow from '../../../../../../models/ModalWindow';

interface RedirectWindow extends ModalWindow {
  users: User[];
  choose: (name: string) => void;
}

const ModalRedirect: React.FC<RedirectWindow> = (props) => {
  const {
    status, close, users, choose,
  } = props;
  const [redirectUser, setRedirectUser] = useState<string | string[]>('');
  const options = mapUsersIntoOptions(users);
  const chooseRedirect = () => {
    if (!isArray(redirectUser)) {
      choose(redirectUser);
      setRedirectUser('');
      close();
    }
  };
  const redirectContent = (
    <div className={classes.modal}>
      <Select
        label="Роль"
        options={options}
        floatingLabel
        style={{ width: '400px', marginBottom: '1em' }}
        value={redirectUser}
        onChange={(e) => setRedirectUser(e)}
      />
      <div className={classes.buttons}>
        <Button variant="outline" type="primary" onClick={close}>
          Отмена
        </Button>
        <Button type="primary" onClick={chooseRedirect}>
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
