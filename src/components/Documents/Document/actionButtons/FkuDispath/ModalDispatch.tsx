import React, { useState } from 'react';
import Modal from '@ff/ui-kit/lib/Modal';
import Select from '@ff/ui-kit/lib/Select';
import Button from '@ff/ui-kit/lib/Button';
import { v4 as uuidv4 } from 'uuid';

import classes from './FkuDispath.module.scss'
import ModalWindow from '../../../../../models/ModalWindow';
import Access from '../../../../../models/Access';


const options = [
  { key: `${uuidv4()}`, value: 'gnivcFkuExpert', label: 'Эксперт ФКУ' },
  { key: `${uuidv4()}`, value: 'gnivcFkuTech', label: 'Тех. эксперт ФКУ' },
  {
    key: `${uuidv4()}`,
    value: 'gnivcFkuSupervisor',
    label: 'Руководитель ФКУ',
  },
];

interface DispathWindow extends ModalWindow {
  choose: (name: Access) => void;
}

const ModalDispath: React.FC<DispathWindow> = (props) => {
  const { status, close, choose } = props;
  const [role, chooseRole] = useState<string | string[]>('');

  const convertToEnum = (str: string | string[]) => {
    if (!role) return ;
    switch (str) {
      case 'gnivcFkuExpert':
        return Access.EXPERT;
      case 'gnivcFkuTech':
        return Access.TEH;
      case 'gnivcFkuSupervisor':
        return Access.SUPERVISOR;
      default:
        return ;
    }
  };

  const selectRole = () => {
    const res = convertToEnum(role);
    if (!res) return;
    choose(res);
    chooseRole('');
    close();
  };

  return (
    <Modal visible={status}  width="500px">
<div className={classes.modal}> 
      <Select
        label="Название списка"
        options={options}
        style={{ width: '450px', marginBottom: '1.5em' }}
        onChange={(e) => chooseRole(e)}
      />
      <div className={classes.buttonsRow}> 
      <Button variant="outline" type="primary" onClick={close}>
        Отмена
      </Button>
      <Button  type="primary" onClick={selectRole}>
        Назначить
      </Button>
      </div>
      </div>
    </Modal>
  );
};
export default ModalDispath;
