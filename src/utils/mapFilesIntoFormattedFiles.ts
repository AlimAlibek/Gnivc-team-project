import DocumentFile from '../models/DocumentFile';

interface FormattedFile {
  id: number;
  name: {};
  fileType: string;
  packageVersion: string;
  uploadedAt: string;
  content?: ArrayBuffer;
}

const mapFilesIntoFormattedFiles = (
  files: DocumentFile[] | undefined,
): FormattedFile[] => (files
  ? files?.map(({
    name, fileType, packageVersion, uploadedAt, content, id,
  }, index) => ({
    id: index,
    name: {
      name, id,
    },
    fileType,
    packageVersion,
    uploadedAt,
    content,
  }))
  : []);
export default mapFilesIntoFormattedFiles;
