import DocumentFile from "../models/DocumentFile"

const downloadFile = (file: DocumentFile) => {
    const blob = new Blob([file.content], {type: file.mime});
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.download = file.name;
    link.href = url;
    link.style.display = "none";
    document.body.append(link);
    link.click();
    link.remove();
}

export default downloadFile;