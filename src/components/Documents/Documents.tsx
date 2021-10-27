import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react';
import Button from '@ff/ui-kit/lib/Button';
import Table from '@ff/ui-kit/lib/Table';
import Typography from '@ff/ui-kit/lib/Typography';
import { useHistory } from 'react-router-dom';

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
    /*eslint-disable */
  useEffect(() => {
    fetchDocuments();
  }, []);
    /* eslint-enable */
  const { createNewDocument } = documentStore;
  const { role, name, userName } = userStore;

  
  const history = useHistory();

  const formDocument = () => {
    const length=tableStore.documents.length+1
    const document = createDocument(String(length), name, userName);
    createNewDocument(document)
    history.push(`/documents/${rows.length + 1}`);
  };

  return (
    <Container>
      <div className={classes.component}>
        <div className={classes.top}>
          <div className={classes.title}>Пакеты документов</div>
          {role === Access.EDITOR && (
            <Button onClick={formDocument} variant="outline" type="primary">
              <div className={classes.button} role="application">
                <i className="sr-0010-circle-plus" />
                <span>Создать пакет документов</span>
              </div>
            </Button>
          )}
        </div>
        <hr />

        {isLoading && <Typography.Title>Loading...</Typography.Title>}

        {error && <Typography.Title>{error}</Typography.Title>}

        <div className={classes.table}>
          <Table columns={columns} rows={rows} />
        </div>

      </div>
    </Container>
  );
});

export default Documents;
