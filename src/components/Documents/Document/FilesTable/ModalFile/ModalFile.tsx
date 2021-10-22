import React, { useState } from 'react';
import FileUploader from '@ff/ui-kit/lib/FileUploader';
import Modal from '@ff/ui-kit/lib/Modal';
import Button from '@ff/ui-kit/lib/Button';
import Select from '@ff/ui-kit/lib/Select';
import { ResultFilesObjectType } from '@ff/ui-kit';

import ModalWindow from '../../../../../models/ModalWindow';
import DocumentFile from '../../../../../models/DocumentFile';
import classes from './ModalFile.module.scss';
import documentStore from '../../../../../stores/documentStore';

const options2 = [
  { key: 1, value: 'Пхема', label: 'Схема' },
  { key: 2, value: 'Проектная документация', label: 'Проектная документация' },
  { key: 3, value: 'График', label: 'График' },
];

const ModalFile: React.FC<ModalWindow> = (props) => {
  const { status, close } = props;
  const { version, addFile } = documentStore;

  const [inputFileData, setInputFileData] = useState<ResultFilesObjectType>();
  const [fileName, setFileName] = useState('');
  const [fileType, setFileType] = useState('');

  const onUpload = (file: ResultFilesObjectType) => {
    setInputFileData(file);
    setFileName((Object.keys(file)[0]));
  };

  const onTypeChange = (value: string | string[]) => {
    setFileType(
      typeof value === 'string' ? value : value.join(', '),
    );
  };

  const save = () => {
    const fileData = inputFileData?.[fileName];
    if (!fileData) return;
    const newFile: DocumentFile = {
      ...fileData,
      fileType: fileType || 'не указан',
      uploadedAt: new Date().toLocaleDateString(),
      packageVersion: version?.version || '',
    };
    console.log(JSON.stringify(newFile));
    console.log(newFile);
    addFile(newFile);
    setInputFileData({});
    close();
  };

  const cancel = () => {
    setInputFileData({});
    close();
  };

  return (
    <Modal
      visible={status}
      
    >
      <FileUploader
        accept=".txt, .docx, .xlsx, .vsd, .pdf"
        onChange={onUpload}
        maxFileSizeInBytes={10000000}
        withPreview
      />
      <Select
        label="Тип"
        options={options2}
        floatingLabel
        style={{ margin: '1.5em 0' }}
        fullWidth
        onChange={onTypeChange}
      />

      <div className={classes.buttons}>
        <Button type="primary" onClick={save}>
          Сохранить
        </Button>
        <Button variant="outline" type="primary" onClick={cancel}>
          Отмена
        </Button>
      </div>
    </Modal>
  );
};
export default ModalFile;
