import React from 'react';
import { observer } from 'mobx-react';
import Button from '@ff/ui-kit/lib/Button';
import Icon from '@ff/ui-kit/lib/Icon';
import Table from '@ff/ui-kit/lib/Table';
import Typography from '@ff/ui-kit/lib/Typography';

import '../../styles/icons/tabler-icons-ext.css';
import classes from './Documents.module.scss';
import Container from '../layouts/Container';
import getColumns from '../../utils/getColumns';
import Access from '../../models/Access';
import userStore from '../../stores/userStore';
import tableStore from '../../stores/tableStore';

const columns = getColumns();

const Documents: React.FC = observer(() => {
  const { documents: rows, error, isLoading } = tableStore;
  const { role } = userStore;

  return (
    <Container>
      <div className={classes.component}>
        <div className={classes.top}>
          <div className={classes.title}>Пакеты документов</div>
          {role === Access.EDITOR && (
            <Button className={classes.button} variant="outline" type="primary">
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
