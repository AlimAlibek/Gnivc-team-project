import { makeAutoObservable } from 'mobx';

import Document from '../../models/interfaces/Document';
import FormattedDocument from '../../models/interfaces/FormattedDocument';
import service from './documentsStore.service';

class DocumentsStore {
  document: Document | null = null;

  documents: FormattedDocument[] = [];

  isLoading = false;

  error = '';

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  setDocument(document: Document) {
    this.document = document;
  }

  setDocuments(documents: FormattedDocument[]) {
    this.documents = documents;
  }

  setIsLoading(boolean: boolean) {
    this.isLoading = boolean;
  }

  setError(error: string) {
    this.error = error;
  }

  fetchDocuments() {
    this.setIsLoading(true);
    service
      .fetchDocuments()
      .then((response) => this.setDocuments(response.data))
      .catch((error) => {
        if (error.response) {
          this.setError('Bad Request. This Document does not exist');
        } else if (error.request) {
          this.setError('Something went wrong. Try again later');
        } else {
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
          this.setError('Bad Request. This data does not exist');
        } else if (error.request) {
          this.setError('Something went wrong. Try again later');
        } else {
          this.setError('Unexpected error. Try again later');
        }
      })
      .finally(() => this.setIsLoading(false));
  }
}

export default new DocumentsStore();
