import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import Button from '@ff/ui-kit/lib/Button';
import Icon from '@ff/ui-kit/lib/Icon';
import Table from '@ff/ui-kit/lib/Table';
import Typography from '@ff/ui-kit/lib/Typography';

import userStore from '../../stores/userStore';
import classes from './Documents.module.scss';
import Container from '../layouts/Container';
import getColumns from '../../utils/getColumns';
import getRows from '../../utils/getRows';
import documentsStore from '../../stores/documentsStore';
import '../../styles/icons/tabler-icons-ext.css';

const Documents: React.FC = observer(() => {
  const {
    documents, error, isLoading, fetchDocuments,
  } = documentsStore;
  useEffect(() => {
    fetchDocuments();
  }, []);

  const rows = getRows(documents);
  const columns = getColumns();

  const { selectedUser } = userStore;

  if (isLoading) {
    return <Typography.Title>Loading...</Typography.Title>;
  }
  if (error) {
    return <Typography.Title>{error}</Typography.Title>;
  }
  const isDeveloper = selectedUser ? selectedUser.role === 'editor' : false;
  const showButton = isDeveloper ? (
    <Button className={classes.button} variant="outline" type="primary">
      <Icon name="0010-circle-plus" />
      <span>Создать пакет документов</span>
    </Button>
  ) : null;
  return (
    <Container>
      <div className={classes.component}>
        <div className={classes.top}>
          <div className={classes.title}>Пакеты документов</div>
          {showButton}
        </div>
        <hr />
        <Table columns={columns} rows={rows} />
      </div>
    </Container>
  );
});

export default Documents;
