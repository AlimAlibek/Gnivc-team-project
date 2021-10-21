import React from 'react';
import Typography from '@ff/ui-kit/lib/esm/components/Typography';
import Modal from '@ff/ui-kit/lib/Modal';
import Button from '@ff/ui-kit/lib/Button';
import Select from '@ff/ui-kit/lib/Select';
import TextField from '@ff/ui-kit/lib/TextField';

import ModalWindow from '../../../../../models/ModalWindow';
import classes from './ModalFile.module.scss';

const options2 = [
  { key: 1, value: 'first', label: 'Значение первое' },
  { key: 2, value: 'second', label: 'Значение второе' },
  { key: 3, value: 'third', label: 'Значение третье' },
];
interface ModalWindowFile extends ModalWindow{
  title?: string;
}

const ModalFile: React.FC<ModalWindowFile> = (props) => {
  const { status, close, title="Добавление файла" } = props;

  const fileContent = (
    <div className={classes.modal}>
      <TextField
        name="floating-label"
        label="Наименование"
        labelStyle="floating"
        className={classes.textField}
      />
      <Select
        label="Тип"
        options={options2}
        floatingLabel
        style={{ width: '400px', margin: '1.5em 0' }}
      />
      <div className={classes.textRow}>
        <div>
          <Typography className={classes.loadText}>Загружен </Typography>
          <Typography className={classes.date}>10.20.1987</Typography>
        </div>
        <Typography className={classes.link}>Скачать файл</Typography>
      </div>
      <div className={classes.row}>
        <Button
          variant="outline"
          type="primary"
          startIcon="file_earmark_arrow-up"
        >
          Загрузить
        </Button>
        <div>
          <Button type="primary">Сохранить</Button>
          <Button variant="outline" type="primary" onClick={close}>
            Отмена
          </Button>
        </div>
      </div>
    </div>
  );
  // Тут будет что то
  return (
    <Modal
      width="470px"
      visible={status}
      onClose={close}
      title={title}
    >
      {fileContent}
    </Modal>
  );
};
export default ModalFile;
