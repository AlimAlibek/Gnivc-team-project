import axios, { AxiosResponse } from 'axios';

import Status from '../../models/enums/Status';
import Document from '../../models/interfaces/Document';
import Version from '../../models/interfaces/Version';
import ColorAndStatus from '../../models/types/ColorAndStatus';
import getTranslatedStatus from '../../utils/getTranslatedStatus';

const API_URL = 'http://localhost:8000/';

const httpClient = axios.create({ baseURL: API_URL });

const service = {
  findTitle(id: string, documents: Document[]): string | undefined {
    return documents.find((document) => id === document.id)?.title;
  },

  findLastVersion(versions: Version[]): Version {
    return versions[versions.length - 1];
  },

  findStatus(status: Status): ColorAndStatus {
    const translatedStatus = getTranslatedStatus(status);
    let color = '';
    switch (status) {
      case Status.SCATCH:
        color = 'grey';
        break;
      case Status.APPROVING:
        color = 'orange';
        break;
      case Status.REFACTORING:
        color = 'orange';
        break;
      case Status.APPROVED:
        color = 'lightgreen';
        break;
      default:
        color = 'red';
        break;
    }
    return [color, translatedStatus];
  },

  fetchDocuments(): Promise<AxiosResponse<Document[]>> {
    return httpClient.get<Document[]>('/documents');
  },

  fetchDocument(id: string): Promise<AxiosResponse<Document>> {
    return httpClient.get<Document>(`/documents/${id}`);
  },
};

export default service;
