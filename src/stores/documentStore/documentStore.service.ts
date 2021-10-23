import httpClient from '../_api';
import Status from '../../models/Status';
import Version from '../../models/Version';
import DocumentPackage from '../../models/DocumentPackage';

const service = {
  async fetchDocument(id: string): Promise<DocumentPackage> {
    const response = await httpClient.get<DocumentPackage>(`/documents/${id}`);
    return response.data;
  },
  // ========================================================================================
  async putDocument(documentPackage: DocumentPackage): Promise<DocumentPackage> {
    const { id } = documentPackage;
    const response = await httpClient.put<DocumentPackage>(`/documents/${id}`, documentPackage);
    return response.data;
  },
  // ============================================================================================
  isTheLastVersionFinished(versions: Version[] | undefined): boolean {
    if (!versions) return false;
    return versions[versions.length - 1].status === Status.APPROVED;
  },
};

export default service;
