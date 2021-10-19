import React,{useState} from 'react';
import Button from '@ff/ui-kit/lib/Button';
import Modal from '@ff/ui-kit/lib/Modal';
import TextAreaField from '@ff/ui-kit/lib/TextAreaField';

import Status from '../../../../../models/Status';
import documentStore from '../../../../../stores/documentStore';
import userStore from '../../../../../stores/userStore';


const ApproveReturn: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { setStatus, addComent } = documentStore;


  const approve = () => {
    setStatus(Status.APPROVED);
    addComent('Принял документ');
  };
  const deny = () => {
    setStatus(Status.REFACTORING);
    addComent('Отправил на доработку');
  };
  const closeModal = () => {
  setIsOpen(false);
};
const openModal=()=>{
  setIsOpen(true);
}
const modalContent=(
    <>
    <Button variant="outline" type="primary" onClick={closeModal}>
    Отмена
  </Button>
    <Button  type="primary" >
      Отправить
    </Button>
  </>

)


  return (
    <div className="buttons-row">
    <Modal
    visible={isOpen}
    title="Попробуем так"
  >
    {modalContent}
  </Modal>
      <Button onClick={approve} variant="fill" type="primary">
        Согласовать
      </Button>
      <Button variant="outline" type="primary" onClick={openModal}>
        Вернуть на доработку
      </Button>
    </div>
  );
};
export default ApproveReturn;
