import httpClient from '../api';
import mapDocumentsIntoFormattedDocuments from '../../utils/mapDocumentsIntoFormattedDocuments';
import FormattedDocument from '../../models/interfaces/FormattedDocument';
import DocumentPackage from '../../models/interfaces/DocumentPackage';

const service = {
  async fetchDocuments(): Promise<FormattedDocument[]> {
    const response = await httpClient.get<DocumentPackage[]>('/documents');
    return mapDocumentsIntoFormattedDocuments(response.data);
  },

  async fetchDocument(id: string): Promise<DocumentPackage> {
    const response = await httpClient.get<DocumentPackage>(`/documents/${id}`);
    return response.data;
  },
};

export default service;
