import { makeAutoObservable } from 'mobx';

import Status from '../../models/enums/Status';
import IDocument from '../../models/interfaces/IDocument';
import IVersion from '../../models/interfaces/IVersion';
import TColorAndStatus from '../../models/types/TColorAndStatus';
import service from './documentsStore.service';

class DocumentsStore {
  document: IDocument | null = null;

  documents: IDocument[] = [];

  isLoading = false;

  error = '';

  constructor() {
    makeAutoObservable(this);
  }

  setDocuments(documents: IDocument[]) {
    this.documents = documents;
  }

  setDocument(document: IDocument) {
    this.document = document;
  }

  setIsLoading(boolean: boolean) {
    this.isLoading = boolean;
  }

  setError(error: string) {
    this.error = error;
  }

  findTitle(id: string, documents: IDocument[]): string | undefined {
    return service.findTitle(id, documents);
  }

  findLastVersion(versions: IVersion[]): IVersion {
    return service.findLastVersion(versions);
  }

  findStatus(status: Status): TColorAndStatus {
    return service.findStatus(status);
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
