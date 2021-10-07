import axios, { AxiosResponse } from 'axios';


import Document from '../../models/interfaces/Document';
import Version from '../../models/interfaces/Version';


const API_URL = 'http://localhost:8000/';

const httpClient = axios.create({ baseURL: API_URL });

const service = {
  findTitle(id: string, documents: Document[]): string | undefined {
    return documents.find((document) => id === document.id)?.title;
  },

  findLastVersion(versions: Version[]): Version {
    return versions[versions.length - 1];
  },


  fetchDocuments(): Promise<AxiosResponse<Document[]>> {
    return httpClient.get<Document[]>('/documents');
  },

  fetchDocument(id: string): Promise<AxiosResponse<Document>> {
    return httpClient.get<Document>(`/documents/${id}`);
  },
};

export default service;
