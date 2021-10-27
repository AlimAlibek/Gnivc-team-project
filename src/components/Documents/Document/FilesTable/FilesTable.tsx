import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import Typography from '@ff/ui-kit/lib/esm/components/Typography';
import Table, { ColDef } from '@ff/ui-kit/lib/esm/components/Table';
import Button from '@ff/ui-kit/lib/Button';
import Modal from '@ff/ui-kit/lib/Modal';

import classes from './FilesTable.module.scss';
import ModalFile from './ModalFile';
import AddFile from './AddFile';
import mapFilesIntoFormattedFiles from '../../../../utils/mapFilesIntoFormattedFiles';
import downloadFile from '../../../../utils/downloadFile';
import isFieldsBlocked from '../../../../utils/isFieldsBlocked';
import documentStore from '../../../../stores/documentStore';
import userStore from '../../../../stores/userStore';

const FilesTable: React.FC = observer(() => {
  const { version, status, removeFile } = documentStore;
  const { selectedUser, userName } = userStore;

  const [openModal, setOpenModal] = useState(false);
  const [isFileChanging, setFileChanging] = useState<number | undefined>();
  const disabled = selectedUser && version
    ? isFieldsBlocked(selectedUser, status, version.activeReviewer, userName)
    : true;

  const handleAddFile = () => {
    if (!disabled) {
      setOpenModal(true);
    }
  };


  const handleModifyFile = (index: number) => {
    setOpenModal(true);
    setFileChanging(index);
    
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setFileChanging(undefined);
    
  };

  // prettier-ignore
  const download = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    const file = version?.files.find((f) => f.id === id);
    if (file) {
      downloadFile(file);
    }
  };

  const rows = mapFilesIntoFormattedFiles(version?.files);
  const columns: ColDef[] = [
    {
      title: 'Файл',
      key: '1',
      dataKey: 'nameWithId',
      render: (nameWithId: { name: string; id: string }): JSX.Element => (
        <a href="#" onClick={(e) => download(e, nameWithId.id)}>
          {nameWithId.name}
        </a>
      ),
    },
    { title: 'Тип', key: '2', dataKey: 'fileType' },
    { title: 'Версия пакета', key: '3', dataKey: 'packageVersion' },
    { title: 'Загружен', key: '4', dataKey: 'uploadedAt' },
    {
      title: 'Действия',
      key: '5',
      dataKey: 'index',
      render: (index: number): JSX.Element => (
        <div className={disabled ? classes.invisible : ''}>
          <Button
            variant="text"
            startIcon="PencilSquare"
            onClick={() => handleModifyFile(index)}
          />
          <Button
            variant="text"
            startIcon="delete"
            onClick={() => removeFile(index)}
          />
        </div>
      ),
    },
  ];

  return (
    <div className={classes.component}>
      <Typography className={classes.subtitle}>Файлы</Typography>
      <Table columns={columns} rows={rows} className={classes.filesTable} />
      {!disabled && <AddFile onClick={handleAddFile} />}
      <Modal visible={openModal} onBackdropClick={handleCloseModal}>
        <ModalFile close={handleCloseModal} isFileChanging={isFileChanging} />
      </Modal>
    </div>
  );
});
export default FilesTable;
