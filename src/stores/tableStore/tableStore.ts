import { makeAutoObservable } from 'mobx';

import getColumns from '../../utils/getColumns';
import FormattedDocument from '../../models/FormattedDocument';
import service from './tableStore.service';

class TableStore {
  documents: FormattedDocument[] = [];

  isLoading = false;

  error = '';

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
    this.fetchDocuments();
  }

  setDocuments(documents: FormattedDocument[]) {
    this.documents = documents;
  }
  createTable(){
    getColumns()
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
}

export default new TableStore();
