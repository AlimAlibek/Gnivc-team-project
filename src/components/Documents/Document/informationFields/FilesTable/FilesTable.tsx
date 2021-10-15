import React from 'react';
import Table from '@ff/ui-kit/lib/Table';

import File from '../../../../models/File';

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

const Translates = {
  name: 'Файл',
  fileType: 'Тип',
  packageVersion: 'Версия пакета',
  uploadedAt: 'Загружен',
};
interface Column {
  title: string;
  key: number;
  dataKey: string;
}
const columns = Object.entries(Translates).map(
  (pair, index): Column => ({ title: pair[1], key: index, dataKey: pair[0] }),
);

type TableProps = {
  files: DocumentFile[];
};
const FilesTable: React.FC<TableProps> = ({ files }) => {
  if (!files || files.length === 0) {
    return (
      <Table
        columns={columns}
        rows={[]}
        emptyTableMessage={<>Файлы не добавлены</>}
      />
    );
  }
  const TableData = files.map((file, index) => createData(
    index,
    file.name,
    file.fileType,
    file.packageVersion,
    file.uploadedAt,
  ));
  return <Table columns={columns} rows={TableData} />;
};
export default FilesTable;
