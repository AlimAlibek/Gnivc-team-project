import React, { useEffect, useState } from 'react';
import FileUploader from '@ff/ui-kit/lib/FileUploader';
import Button from '@ff/ui-kit/lib/Button';
import Select from '@ff/ui-kit/lib/Select';
import { ResultFilesObjectType, ResultFileType } from '@ff/ui-kit';

import classes from './ModalFile.module.scss';
import DocumentFile from '../../../../../models/DocumentFile';
import getInputFile from '../../../../../utils/getInputFile';
import documentStore from '../../../../../stores/documentStore';

const options2 = [
  { key: 1, value: 'Схема', label: 'Схема' },
  { key: 2, value: 'Проектная документация', label: 'Проектная документация' },
  { key: 3, value: 'График', label: 'График' },
  { key: 3, value: 'Не указан', label: 'Не указан' },
];

interface FileModalWindow {
  close: () => void;
  isFileChanging: number | undefined;
}
const ModalFile: React.FC<FileModalWindow> = ({ close, isFileChanging }) => {
  const { version, addFile, updateFile } = documentStore;

  // prettier-ignore
  const [modifiableFile, setModifiableFile] = useState<ResultFilesObjectType | undefined>(undefined);
  const [fileType, setFileType] = useState('');

  useEffect(() => {
    if (isFileChanging === undefined) return;
    const file = version?.files[isFileChanging];
    if (file) {
      setModifiableFile(getInputFile(file));
      setFileType(file.fileType);
    }
  }, [isFileChanging, version?.files]);

  const onUpload = (file: ResultFilesObjectType): void => {
    const entries = Object.entries(file);
    if (entries.length === 0) {
      setModifiableFile(undefined);
    } else {
      const lastPare = entries[entries.length - 1];
      const lastFile = {
        [lastPare[0]]: lastPare[1],
      };
      setModifiableFile(lastFile);
    }
  };

  const onTypeChange = (value: string | string[]) => {
    setFileType(typeof value === 'string' ? value : value.join(', '));
  };

  const save = () => {
    if (!modifiableFile) return;
    const fileData: ResultFileType = Object.values(modifiableFile)[0];

    const newFile: DocumentFile = {
      ...fileData,
      fileType: fileType || 'Не указан',
      uploadedAt: new Date().toLocaleDateString(),
      packageVersion: version?.version || '',
      id: Date.now().toString(),
    };

    if (isFileChanging !== undefined) {
      updateFile(newFile, isFileChanging);
    } else addFile(newFile);

    setModifiableFile(undefined);
    setFileType('');
    close();
  };

  return (
    <>
      <FileUploader
        accept=".txt, .docx, .xlsx, .vsd, .pdf, .rtf"
        onChange={onUpload}
        maxFileSizeInBytes={10000000}
        value={modifiableFile}
        withPreview
      />
      <Select
        label="Тип"
        options={options2}
        floatingLabel
        style={{ margin: '1.5em 0' }}
        fullWidth
        onChange={onTypeChange}
        value={fileType}
      />

      <div className={classes.buttons}>
        <Button type="primary" onClick={save}>
          Сохранить
        </Button>
        <Button variant="outline" type="primary" onClick={close}>
          Отмена
        </Button>
      </div>
    </>
  );
};
export default ModalFile;
