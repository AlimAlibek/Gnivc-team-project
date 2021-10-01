import React, { useEffect } from 'react';
import { Button, Icon, Table } from '@ff/ui-kit';
import { observer } from 'mobx-react';

import { columns } from './scripts';
import classes from './TableComponent.module.scss';
import documentsStore from '../../../stores/DocumentsStore';

const TableComponent: React.FC = observer(() => {
  useEffect(() => {
    documentsStore.fetchDocuments();
  }, []);

  if (documentsStore.isLoading) {
    return <div>Loading...</div>;
  }
  if (documentsStore.error) {
    return <div>There&apos;s an error. Try again later</div>;
  }

  return (
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
  );
});

export default TableComponent;
