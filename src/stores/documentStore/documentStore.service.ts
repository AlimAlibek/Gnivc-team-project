import httpClient from '../_api';
import Comment from '../../models/Comment';
import DocumentPackage from '../../models/DocumentPackage';
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

  async deleteData(patch: string): Promise<void> {
    httpClient.delete(patch);
  },

  // prettier-ignore



  async removeVersion(document: DocumentPackage, { versionCode }: Version): Promise<DocumentPackage> {
    const { id, versions } = document;
    // eslint-disable-next-line
    document.versions = versions.filter(({ versionCode: code }) => code !== versionCode);

    const response = await httpClient.patch(`/documents/${id}`, document);
    return response.data;
  },

};

export default service;
