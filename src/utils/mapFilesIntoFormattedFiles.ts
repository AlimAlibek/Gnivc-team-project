import DocumentFile from '../models/DocumentFile';

interface FormattedFile {
  id: number;
  name: string;
  fileType: string;
  packageVersion: string;
  uploadedAt: string;
}

const mapFilesIntoFormattedFiles = (
  files: DocumentFile[] | undefined,
): FormattedFile[] => (files
  ? files?.map(({
    name, fileType, packageVersion, uploadedAt,
  }, index) => ({
    id: index,
    name,
    fileType,
    packageVersion,
    uploadedAt,
  }))
  : []);
export default mapFilesIntoFormattedFiles;
