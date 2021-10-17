import { makeAutoObservable } from 'mobx';

import documentVersionStore from '../documentVersionStore';
import FormattedDocument from '../../models/interfaces/FormattedDocument';
import DocumentPackage from '../../models/interfaces/DocumentPackage';
import service from './documentsStore.service';

class DocumentsStore {
  document: DocumentPackage | null = null;

  documents: FormattedDocument[] = [];

  isLoading = false;

  error = '';

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  setDocument(document: DocumentPackage) {
    this.document = document;
    documentVersionStore.setLastVersion(document.versions);
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
      .then((data) => this.setDocuments(data))
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

  hasUnfinishedVersions() {
    return (!this.document?.versions.find((v) => v.status !== 'approved'));
  }

  fetchDocument(id: string) {
    this.setIsLoading(true);
    service
      .fetchDocument(id)
      .then((data) => this.setDocument(data))
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
