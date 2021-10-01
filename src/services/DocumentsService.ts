import { AxiosResponse } from 'axios';

import { IDocument } from '../models/interfaces/IDocument';
import httpClient from '../api';

export default class TableService {
  static async fetchDocuments(): Promise<AxiosResponse<Array<IDocument>>> {
    const data = await httpClient.get<Array<IDocument>>('/documents');
    return data;
  }

  static async fetchDocument(id: string): Promise<AxiosResponse<IDocument>> {
    const data = await httpClient.get<IDocument>(`/documents/${id}`);
    return data;
  }
}
