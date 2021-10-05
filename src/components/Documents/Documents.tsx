import React, { useEffect } from 'react';
import {
  Button, Icon, Table, Typography,
} from '@ff/ui-kit';
import { observer } from 'mobx-react';
import userStore from '../../stores/userStore';
import columns from './columns';
import classes from './Documents.module.scss';
import Container from '../layouts/Container';
import documentsStore from '../../stores/documentsStore';
import '../../styles/icons/tabler-icons-ext.css';

 const { error, isLoading, fetchDocuments } = documentsStore
 const {selectedUser}=userStore

const Documents: React.FC = observer(() => {
  useEffect(() => {
    fetchDocuments();
  }, []);

 

  if (isLoading) {
    return <Typography.Title>Loading...</Typography.Title>;
  }
  if (error) {
    return <Typography.Title>{error}</Typography.Title>;
  }
    const isDeveloper = selectedUser ? (selectedUser.role === 'editor') : false;
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
        <Table columns={columns} rows={documentsStore.documents} />
      </div>
    </Container>
  );
});

export default Documents;
