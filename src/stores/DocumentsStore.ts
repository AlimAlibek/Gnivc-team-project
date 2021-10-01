import { makeAutoObservable } from 'mobx';

import { IDocument } from '../models/interfaces/IDocument';
import TableService from '../services/DocumentsService';

class DocumentsStore {
  document: IDocument | null = null;

  documents: Array<IDocument> = [];

  isLoading = false;

  error: any = '';

  constructor() {
    makeAutoObservable(this);
  }

  setDocuments(documents: Array<IDocument>) {
    this.documents = documents;
  }

  setDocument(document: IDocument) {
    this.document = document;
  }

  setIsLoading(boolean: boolean) {
    this.isLoading = boolean;
  }

  setError(error: any) {
    this.error = error;
  }

  async fetchDocuments() {
    this.setIsLoading(true);
    try {
      const data = await TableService.fetchDocuments();
      this.setDocuments(data.data);
    } catch (error) {
      this.setError(error);
    } finally {
      this.setIsLoading(false);
    }
  }

  async fetchDocument(id: string) {
    this.setIsLoading(true);
    try {
      const data = await TableService.fetchDocument(id);
      this.setDocument(data.data);
    } catch (error) {
      this.setError(error);
    } finally {
      this.setIsLoading(false);
    }
  }
}

export default new DocumentsStore();
