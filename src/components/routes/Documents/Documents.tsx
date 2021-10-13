import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import Typography from '@ff/ui-kit/lib/esm/components/Typography';
import Button from '@ff/ui-kit/lib/esm/components/Button';
import Icon from '@ff/ui-kit/lib/esm/components/Icon';
import Table from '@ff/ui-kit/lib/esm/components/Table';

import classes from './Documents.module.scss';
import Container from '../../layouts/Container';
import getColumns from '../../../utils/getColumns';
import documentsStore from '../../../stores/documentsStore';

const columns = getColumns();
const Documents: React.FC = observer(() => {
  const { documents: rows, error, isLoading, fetchDocuments } = documentsStore;

  //prettier-ignore
  useEffect(() => {fetchDocuments()}, [fetchDocuments]);

  return (
    <Container>
      <div className={classes.component}>
        <div className={classes.top}>
          <div className={classes.title}>Пакеты документов</div>
          <Button className={classes.button} variant="outline" type="primary">
            <span>Создать пакет документов</span>
          </Button>
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
