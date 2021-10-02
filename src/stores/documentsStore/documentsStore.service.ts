import axios, { AxiosResponse } from 'axios';

import Status from '../../models/enums/Status';
import IDocument from '../../models/interfaces/IDocument';
import IVersion from '../../models/interfaces/IVersion';
import TColorAndStatus from '../../models/types/TColorAndStatus';
import getTranslatedStatus from '../../utils/getTranslatedStatus';

const API_URL = 'http://localhost:8000/';

const httpClient = axios.create({ baseURL: API_URL });

const service = {
  findTitle(id: string, documents: IDocument[]): string | undefined {
    return documents.find((document) => id === document.id)?.title;
  },

  findLastVersion(versions: IVersion[]): IVersion {
    return versions[versions.length - 1];
  },

  findStatus(status: Status): TColorAndStatus {
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

  fetchDocuments(): Promise<AxiosResponse<IDocument[]>> {
    return httpClient.get<IDocument[]>('/documents');
  },

  fetchDocument(id: string): Promise<AxiosResponse<IDocument>> {
    return httpClient.get<IDocument>(`/documents/${id}`);
  },
};

export default service;
