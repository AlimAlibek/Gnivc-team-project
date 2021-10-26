import httpClient from '../_api';
import Comment from '../../models/Comment';
import DocumentPackage from '../../models/DocumentPackage';
import DocumentFile from '../../models/DocumentFile';
import Version from '../../models/Version';

const service = {
  async fetchDocument(id: string): Promise<DocumentPackage> {
    const response = await httpClient.get<DocumentPackage>(`/documents/${id}`);
    return response.data;
  },

  async createNewDocument(document: DocumentPackage): Promise<DocumentPackage> {
    const response = await httpClient.post('/documents/', document);
    return response.data;
  },

  // prettier-ignore
  async updateDocument(document: DocumentPackage): Promise<DocumentPackage> {
    const response = await httpClient.patch(`/documents/${document.id}`, document);
    return response.data;
  },

  async deleteData(patch: string) {
    httpClient.delete(patch);
  },

  // prettier-ignore
  async addComment(document: DocumentPackage, comment: Comment, index: number): Promise<DocumentPackage> {
    const { id, versions } = document;
    const { comments } = versions[index];
    comments?.push(comment);
    console.log(comments);
    const response = await httpClient.patch(`/documents/${id}`, document);
    return response.data;
  },

  // prettier-ignore
  async addFile(document: DocumentPackage, file: DocumentFile, index: number): Promise<DocumentPackage> {
    const { id, versions } = document;
    const { files } = versions[index];
    versions[index].files = [...files, file];

    const response = await httpClient.patch(`/documents/${id}`, document);
    return response.data;
  },

  // prettier-ignore
  async updateFile(document: DocumentPackage, file: DocumentFile, position: number, index: number): Promise<DocumentPackage> {
    const { id, versions } = document;
    versions[index].files.splice(position, 1, file);

    const response = await httpClient.patch(`/documents/${id}`, document);
    return response.data;
  },

  // prettier-ignore
  async removeVersion(document: DocumentPackage, { versionCode }: Version): Promise<DocumentPackage> {
    const { id, versions } = document;
    // eslint-disable-next-line
    document.versions = versions.filter(({ versionCode: code }) => code !== versionCode);

    const response = await httpClient.patch(`/documents/${id}`, document);
    return response.data;
  },

  // prettier-ignore
  async removeFile(document: DocumentPackage, position: number, index: number): Promise<DocumentPackage> {
    const { id, versions } = document;
    const { files } = versions[index];
    versions[index].files = files.filter((_, ind) => ind !== position);

    const response = await httpClient.patch(`/documents/${id}`, document);
    return response.data;
  },
};

export default service;
