import DocumentFile from '../models/DocumentFile';

const downloadFile = (file: DocumentFile) => {
  const array = Object.values(file.content).map((n) => n);
  const arrayBuffer = new Uint8Array(array);

  const blob = new Blob([arrayBuffer], { type: file.mime });
  const url = window.URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.download = file.name;
  link.href = url;
  link.style.display = 'none';
  document.body.append(link);
  link.click();
  link.remove();
};

export default downloadFile;
