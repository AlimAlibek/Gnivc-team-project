import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import Typography from '@ff/ui-kit/lib/esm/components/Typography';
import Table, { ColDef } from '@ff/ui-kit/lib/esm/components/Table';
import Button from '@ff/ui-kit/lib/Button';
import Modal from '@ff/ui-kit/lib/Modal';
import { ResultFilesObjectType } from '@ff/ui-kit';

import classes from './FilesTable.module.scss';
import ModalFile from './ModalFile';
import mapFilesIntoFormattedFiles from '../../../../utils/mapFilesIntoFormattedFiles';
import getInputFile from '../../../../utils/getInputFile';
import downloadFile from '../../../../utils/downloadFile';
import documentStore from '../../../../stores/documentStore';
import AddFile from './AddFile';

const FilesTable: React.FC = observer(() => {
  const { version, isBlocked, deleteFile } = documentStore;
  const disabled = isBlocked();

  const [openModal, setOpenModal] = useState(false);
  const [modifiableFile, setModifiableFile] = useState<ResultFilesObjectType | undefined>(undefined);
  const [fileType, setFileType] = useState('');
  const [isFileChanging, setFileChanging] = useState<number | undefined>();

  const handleAddFile = () => {
    if (disabled) return;
    setOpenModal(true);
  };

  const handleModifyFile = (index: number) => {
    const file = version?.files[index];
    if (file) {
      setOpenModal(true);
      setModifiableFile(getInputFile(file));
      setFileType(file.fileType);
      setFileChanging(index);
     
    }
  };

  const handleUpload = (file: ResultFilesObjectType | undefined) => {
    setModifiableFile(file);
  };
  const handleFileTypeChange = (type: string) => {
    setFileType(type);
  };

  const handleCloseModal = () => {
    setModifiableFile(undefined);
    setFileType('');
    setFileChanging(undefined);
    setOpenModal(false);
  };
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
      render: (nameWithId: { name: string, id: string }): JSX.Element => (
        <a href="#" onClick={(e) => download(e, nameWithId.id)}>
          {nameWithId.name}
        </a>
      ),
    },
    { title: 'Тип', key: '2', dataKey: 'fileType' },
    { title: 'Версия пакета', key: '3', dataKey: 'packageVersion' },
    { title: 'Загружен', key: '4', dataKey: 'uploadedAt' },
    {
      title: '',
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
            onClick={() => deleteFile(index)}
          />
        </div>
      ),
    },
  ];

  return (
     <div className={classes.component}>

      <Typography className={classes.title}>Файлы</Typography>
      <Table columns={columns} rows={rows} />
      {!disabled && <AddFile onClick={handleAddFile} />} 
      <Modal visible={openModal} onBackdropClick={handleCloseModal}>
        <ModalFile 
          close={handleCloseModal}
          modifiableFile={modifiableFile}
          fileType={fileType}
          handleUpload={handleUpload}
          handleFileTypeChange={handleFileTypeChange}
          isFileChanging={isFileChanging}
        />
      </Modal>
    </div>
  );
});
export default FilesTable;
