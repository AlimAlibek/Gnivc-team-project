import DocumentFile from '../models/DocumentFile';

interface FormattedFile {
  id: string;
  nameWithId: {};
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
    index,
    id,
    nameWithId: {
      name, id,
    },
    fileType,
    packageVersion,
    uploadedAt,
    content,
  }))
  : []);
export default mapFilesIntoFormattedFiles;
