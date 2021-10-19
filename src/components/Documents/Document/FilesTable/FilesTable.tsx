import React from 'react';
import { observer } from 'mobx-react-lite';
import Typography from '@ff/ui-kit/lib/esm/components/Typography';
import Table, { ColDef } from '@ff/ui-kit/lib/esm/components/Table';

import classes from './FilesTable.module.scss';
import mapFilesIntoFormattedFiles from '../../../../utils/mapFilesIntoFormattedFiles';
import documentStore from '../../../../stores/documentStore';

const columns: ColDef[] = [
  { title: 'Файл', key: '1', dataKey: 'name' },
  { title: 'Тип', key: '2', dataKey: 'fileType' },
  { title: 'Версия пакета', key: '3', dataKey: 'packageVersion' },
  { title: 'Загружен', key: '4', dataKey: 'uploadedAt' },
];

const FilesTable: React.FC = observer(() => {
  const { version } = documentStore;
  const rows = mapFilesIntoFormattedFiles(version?.files);

  return (
    <div className={classes.component}>
      <Typography className={classes.title}>Файлы</Typography>
      <Table columns={columns} rows={rows} />
    </div>
  );
});
export default FilesTable;
