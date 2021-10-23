import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import Typography from '@ff/ui-kit/lib/esm/components/Typography';
import Table, { ColDef } from '@ff/ui-kit/lib/esm/components/Table';
import Button from '@ff/ui-kit/lib/Button';

import classes from './FilesTable.module.scss';
import ModalFile from './ModalFile';
import mapFilesIntoFormattedFiles from '../../../../utils/mapFilesIntoFormattedFiles';
import documentStore from '../../../../stores/documentStore';
import downloadFile from '../../../../utils/downloadFile';

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

  const download = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    const file = version?.files.find((f) => f.id === id);
    if (file) {
      downloadFile(file);
    }
  };

  const columns: ColDef[] = [
    {
      title: 'Файл',
      key: '1',
      dataKey: 'name',
      render: (name: { name: string, id: string }): JSX.Element => (
        <a href="#" onClick={(e) => download(e, name.id)}>
          {name.name}
        </a>
      ),
    },
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
      <ModalFile status={openModal} close={toggleModal} />
      <Typography className={classes.title}>Файлы</Typography>
      <Table columns={columns} rows={rows} />
    </div>
  );
});
export default FilesTable;
