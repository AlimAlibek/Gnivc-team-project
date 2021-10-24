import React, { useState,useEffect } from 'react';
import { observer } from 'mobx-react';
import Button from '@ff/ui-kit/lib/Button';
import Icon from '@ff/ui-kit/lib/Icon';
import Table from '@ff/ui-kit/lib/Table';
import Typography from '@ff/ui-kit/lib/Typography';
import Modal from '@ff/ui-kit/lib/Modal';
import TextField from '@ff/ui-kit/lib/TextField';

import '../../styles/icons/tabler-icons-ext.css';
import documentStore from '../../stores/documentStore';
import classes from './Documents.module.scss';
import Container from '../layouts/Container';
import getColumns from '../../utils/getColumns';
import Access from '../../models/Access';
import userStore from '../../stores/userStore';
import tableStore from '../../stores/tableStore';

const Documents: React.FC = observer(() => {

  //Тут надо сунуть в юз эффект колонки. 
  const [modal, openModal] = useState(false);
  const [docTitle, setDocTitle] = useState('');

  const toggleModal = () => {
    openModal(!modal);
  };
  const { documents: rows, error, isLoading } = tableStore;
  const { createNewDocument } = documentStore;
  const { role } = userStore;
  const columns = getColumns();
 

  const createDocument = () => {
    if (!docTitle) return;
    createNewDocument(`${rows.length+1}`, docTitle);
    setDocTitle('')
    toggleModal()
  };

  return (
    <Container>
      <Modal visible={modal} title="Введите название пакета документов">
        <div className={classes.modal}>
          <TextField
          onChange={(e)=>setDocTitle(e.target.value)}
          value={docTitle}
            name="floating-label"
            label="Плавающий лейбл"
            labelStyle="floating"
          />
          <div className={classes.buttons}>
            <Button variant="outline" type="primary" onClick={toggleModal}>
              Отмена
            </Button>
            <Button type="primary" onClick={createDocument}>
              Отправить
            </Button>
          </div>
        </div>
      </Modal>
      <div className={classes.component}>
        <div className={classes.top}>
          <div className={classes.title}>Пакеты документов</div>
          {role === Access.EDITOR && (
            <Button
              className={classes.button}
              variant="outline"
              type="primary"
              onClick={toggleModal}
            >
              <Icon name="0010-circle-plus" />
              <span>Создать пакет документов</span>
            </Button>
          )}
        </div>
        <hr />

        {isLoading && <Typography.Title>Loading...</Typography.Title>}

        {error && <Typography.Title>{error}</Typography.Title>}

        <Table columns={columns} rows={rows} />
      </div>
    </Container>
  );
});

export default Documents;
