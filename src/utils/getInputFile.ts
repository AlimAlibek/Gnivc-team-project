import { ResultFilesObjectType } from '@ff/ui-kit';

import DocumentFile from '../models/DocumentFile';

const getInputFile = (fileObj: DocumentFile) => {
  const array = Object.values(fileObj.content).map((n) => n);
  const arrayBuffer = new Uint8Array(array);

  const { name, mime, size } = fileObj;
  const inputFile: ResultFilesObjectType = {
    [name]: {
      name, mime, content: arrayBuffer, size,
    },
  };
  return inputFile;
};

export default getInputFile;
