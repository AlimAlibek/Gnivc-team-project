import React from 'react';
import { observer } from 'mobx-react-lite';
import { Table, ColDef } from '@ff/ui-kit';

import documentVersionStore from '../../../../../stores/documentVersionStore';

const createData = (
  id: number,
  name: string,
  fileType: string,
  packageVersion: string,
  uploadedAt: string,
) => ({
  id,
  name,
  fileType,
  packageVersion,
  uploadedAt,
});

const columns: ColDef[] = [
  { title: 'Файл', key: '1', dataKey: 'name' },
  { title: 'Тип', key: '2', dataKey: 'fileType' },
  { title: 'Версия пакета', key: '3', dataKey: 'packageVersion' },
  { title: 'Загружен', key: '4', dataKey: 'uploadedAt' },
];

const FilesTable: React.FC = observer(() => {
  const { version } = documentVersionStore;

  const tableData = version?.files.map((file, index) => createData(
    index,
    file.name,
    file.fileType,
    file.packageVersion,
    file.uploadedAt,
  ));
  return <Table columns={columns} rows={tableData || []} emptyTableMessage="Файлов нет" />;
});
export default FilesTable;
