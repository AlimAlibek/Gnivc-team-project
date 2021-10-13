import axios, { AxiosResponse } from 'axios';

import FormattedDocument from '../../models/interfaces/FormattedDocument';
import Document from '../../models/interfaces/Document';
import formatDocuments from '../../utils/formatDocuments';

const API_URL = 'http://localhost:8000/';

const httpClient = axios.create({ baseURL: API_URL });

httpClient.interceptors.response.use((response) => {
  if (!Array.isArray(response.data)) {             //для начала проверим, что приходит с сервера, один документ или коллекция?
    return response;                               //если один документ, то просто возвращаем его
  }
  response.data = formatDocuments(response.data);  //здесь идёт форматирование данных в нужный нам вид(функия getRows теперь называется formatDocuments)
  return response;
});

const service = {
  fetchDocuments(): Promise<AxiosResponse<FormattedDocument[]>> {
    return httpClient.get<FormattedDocument[]>('/documents');
  },

  fetchDocument(id: string): Promise<AxiosResponse<Document>> {
    return httpClient.get<Document>(`/documents/${id}`);
  },
};

export default service;
