import React, { useState } from 'react';
import { observer } from 'mobx-react';
import Button from '@ff/ui-kit/lib/Button';
import Icon from '@ff/ui-kit/lib/Icon';
import Table from '@ff/ui-kit/lib/Table';
import Typography from '@ff/ui-kit/lib/Typography';
import Modal from '@ff/ui-kit/lib/Modal';
import TextField from '@ff/ui-kit/lib/TextField';

import '../../styles/icons/tabler-icons-ext.css';
import classes from './Documents.module.scss';
import Container from '../layouts/Container';
import getColumns from '../../utils/getColumns';
import Access from '../../models/Access';
import createDocument from '../../utils/createDocument';
import tableStore from '../../stores/tableStore';
import documentStore from '../../stores/documentStore';
import userStore from '../../stores/userStore';

const columns = getColumns();
const Documents: React.FC = observer(() => {
  const {
    documents: rows, error, isLoading, fetchDocuments,
  } = tableStore;
  const { createNewDocument } = documentStore;
  const { role, name, userName } = userStore;

  const [modal, openModal] = useState(false);
  const [docTitle, setDocTitle] = useState('');

  const toggleModal = () => openModal(!modal);

  const formDocument = () => {
    if (docTitle) {
      // prettier-ignore
      const document = createDocument(String(rows.length + 1), name, docTitle, userName);
      createNewDocument(document).then(fetchDocuments);
      setDocTitle('');
      toggleModal();
    }
  };

  return (
    <Container>
      <Modal
        visible={modal}
        title="Введите название пакета документов"
        width="500px"
      >
        <div className={classes.modal}>
          <TextField
            onChange={(e) => setDocTitle(e.target.value)}
            value={docTitle}
            name="floating-label"
            label="Плавающий лейбл"
            labelStyle="floating"
            className={classes.fields}
          />
          <div className={classes.buttons}>
            {/* prettier-ignore */}
            <Button variant="outline" type="primary" onClick={toggleModal}>Отмена</Button>
            {/* prettier-ignore */}
            <Button type="primary" onClick={formDocument}>Отправить</Button>
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
