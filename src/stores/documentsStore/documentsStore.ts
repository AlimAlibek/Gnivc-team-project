import { makeAutoObservable } from 'mobx';
import documentVersionStore from '../documentVersionStore';

import Document from '../../models/interfaces/Document';
import service from './documentsStore.service';

class DocumentsStore {
  document: Document | null = null;

  documents: Document[] = [];

  isLoading = false;

  error = '';

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  setDocuments(documents: Document[]) {
    this.documents = documents;
  }

  setDocument(document: Document) {
    this.document = document;
     documentVersionStore.setLastVersion(document.versions)
  }

  setIsLoading(boolean: boolean) {
    this.isLoading = boolean;
  }

  setError(error: string) {
    this.error = error;
  }

  findTitle(id: string, documents: Document[]): string | undefined {
    return service.findTitle(id, documents);
  }

  fetchDocuments() {
    this.setIsLoading(true);
    service
      .fetchDocuments()
      .then((response) => this.setDocuments(response.data))
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          this.setError('Bad Request. This Document does not exist');
        } else if (error.request) {
          console.log(error.request);
          this.setError('Something went wrong. Try again later');
        } else {
          console.log('Error', error.message);
          this.setError('Unexpected error. Try again later');
        }
      })
      .finally(() => this.setIsLoading(false));
  }

  fetchDocument(id: string) {
    this.setIsLoading(true);
    service
      .fetchDocument(id)
      .then((response) => this.setDocument(response.data))
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          this.setError('Bad Request. This data does not exist');
        } else if (error.request) {
          console.log(error.request);
          this.setError('Something went wrong. Try again later');
        } else {
          console.log('Error', error.message);
          this.setError('Unexpected error. Try again later');
        }
      })
      .finally(() => this.setIsLoading(false));
  }
}

export default new DocumentsStore();
