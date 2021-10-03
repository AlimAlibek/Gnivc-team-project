import React, { useEffect } from 'react';
import {
  Button, Icon, Table, Typography,
} from '@ff/ui-kit';
import { observer } from 'mobx-react';

import columns from './columns';
import classes from './Documents.module.scss';
import Container from '../../layouts/Container';
import documentsStore from '../../../stores/documentsStore';

const Documents: React.FC = observer(() => {
  useEffect(() => {
    documentsStore.fetchDocuments();
  }, []);

  if (documentsStore.isLoading) {
    return <Typography.Title>Loading...</Typography.Title>;
  }
  if (documentsStore.error) {
    return <Typography.Title>{documentsStore.error}</Typography.Title>;
  }
  return (
    <Container>
      <div className={classes.component}>
        <div className={classes.top}>
          <div className={classes.title}>Пакеты документов</div>
          <Button className={classes.button} variant="outline" type="primary">
            <Icon className={classes.icon} name="plus" />
            <span>Создать пакет документов</span>
          </Button>
        </div>
        <hr /> 
        <Table columns={columns} rows={documentsStore.documents} />
      </div>
    </Container>
  );
});

export default Documents;
