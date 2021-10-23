interface DocumentFile {
  id: string;
  content: ArrayBuffer;
  mime: string;
  name: string;
  size: number;
  fileType: string;
  packageVersion: string;
  uploadedAt: string;
}

export default DocumentFile;
