import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import Typography from '@ff/ui-kit/lib/esm/components/Typography';
import Table, { ColDef } from '@ff/ui-kit/lib/esm/components/Table';
import Button from '@ff/ui-kit/lib/Button';

import ModalFile from './ModalFile';
import classes from './FilesTable.module.scss';
import mapFilesIntoFormattedFiles from '../../../../utils/mapFilesIntoFormattedFiles';
import documentStore from '../../../../stores/documentStore';

const FilesTable: React.FC = observer(() => {
  const [openModal, setOpenModal] = useState(false);

  const { version, isBlocked } = documentStore;
  const disabled = isBlocked();

  const toggleModal = () => {
    if (disabled) return;
    setOpenModal(!openModal);
  };
  const hidden = disabled ? classes.invisible : '';

  const rows = mapFilesIntoFormattedFiles(version?.files);

  const columns: ColDef[] = [
    { title: 'Файл', key: '1', dataKey: 'name' },
    { title: 'Тип', key: '2', dataKey: 'fileType' },
    { title: 'Версия пакета', key: '3', dataKey: 'packageVersion' },
    { title: 'Загружен', key: '4', dataKey: 'uploadedAt' },
    {
      title: '',
      key: '5',
      dataKey: '',
      render: (): JSX.Element => (
        <div className={hidden}>
          <Button
            variant="text"
            startIcon="PencilSquare"
            onClick={toggleModal}
          />
          <Button variant="text" startIcon="delete" />
        </div>
      ),
    },
  ];

  return (
    <div className={classes.component}>
      <ModalFile status={openModal} close={toggleModal} title="Изменить файл" />
      <Typography className={classes.title}>Файлы</Typography>
      <Table columns={columns} rows={rows} />
    </div>
  );
});
export default FilesTable;
