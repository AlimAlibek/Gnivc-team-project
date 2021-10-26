import Button from '@ff/ui-kit/lib/Button';
import Modal from '@ff/ui-kit/lib/Modal';

import ModalWindow from '../../../../../../models/ModalWindow';
import classes from '../ApproveReturn.module.scss';

interface ApproveWindow extends ModalWindow {
  action: () => void;
}
const ModalApprove: React.FC<ApproveWindow> = (props) => {
  const { status, close, action } = props;
  return (
    <Modal width="500px" visible={status} title="Принять данную версию?">
      <div className={classes.buttons}>
        <Button type="primary" onClick={action} style={{ padding: '7px 40px' }}>
          Да
        </Button>
        <Button variant="outline" type="primary" onClick={close} style={{ padding: '7px 40px' }}>
          Нет
        </Button>
      </div>
    </Modal>
  );
};
export default ModalApprove;
