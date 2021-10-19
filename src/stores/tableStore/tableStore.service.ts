import httpClient from '../_api';
import DocumentPackage from '../../models/DocumentPackage';
import FormattedDocument from '../../models/FormattedDocument';
import mapDocumentsIntoFormattedDocuments from '../../utils/mapDocumentsIntoFormattedDocuments';

const service = {
  async fetchDocuments(): Promise<FormattedDocument[]> {
    const response = await httpClient.get<DocumentPackage[]>('/documents');
    return mapDocumentsIntoFormattedDocuments(response.data);
  },
};

export default service;
