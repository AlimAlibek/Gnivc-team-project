import React, { useState } from 'react';
import Button from '@ff/ui-kit/lib/Button';

import documentStore from '../../../../../stores/documentStore';
import Access from '../../../../../models/Access';
import ModalDispath from './ModalDispatch';

const DispatchButton: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);

  const { setFkuRole } = documentStore;
  const toggleModal = () => {
    setOpenModal(!openModal);
  };
  const setRewier = (role: Access) => {
    setFkuRole(role);
  };
  return (
    <div>
      <ModalDispath status={openModal} close={toggleModal} choose={setRewier} />
      <Button type="primary" onClick={toggleModal}> Назначить </Button>
    </div>
  );
};

export default DispatchButton;
