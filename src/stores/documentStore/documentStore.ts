import { makeAutoObservable } from 'mobx';
import { toJS } from 'mobx';

import service from './documentStore.service';
import isDisabled from '../../utils/isDisabled';
import userStore from '../userStore';
import Version from '../../models/Version';
import Status from '../../models/Status';
import DocumentPackage from '../../models/DocumentPackage';

class DocumentStore {
  documentPackage: DocumentPackage | undefined = undefined;

  version: Version | undefined = undefined;

  isLoading = false;

  error = '';

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  get status() {
    return this.version?.status ?? Status.SCATCH;
  }

  get isTheLastVersionFinished() {
    return service.isTheLastVersionFinished(this.documentPackage?.versions);
  }

  setDocument(document: DocumentPackage) {
    this.documentPackage = document;
    console.log(toJS(this.documentPackage))
  }

  setVersion(version: Version) {
    this.version = version;
  }

  setIsLoading(boolean: boolean) {
    this.isLoading = boolean;
  }

  setError(error: string) {
    this.error = error;
  }

  setLastVersion(versions: Version[] | undefined) {
    if (versions) {
      this.version = versions[versions.length - 1];
    }
  }

  setStatus(status: Status) {
    if (this.version) {
      this.version.status = status;
    }
  }

  isBlocked(): boolean {
    // Этот элемент нам потребуется в полях, куда мы все равно будем пробрасывать данные отсюда, поэтому лучше вызывать его тут все равно в эти поля стор надо подключать.
    const { role } = userStore;
    return isDisabled(role, this.status);
  }

  addComent(text: string) {
    const { name } = userStore;
    // Не удалять, все равно вернется назад.
    this.version?.comments.push({
      text,
      person: name,
      createdAt: new Date().toLocaleDateString('ru'),
      time: new Date().toLocaleTimeString('ru'),
    });
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

export default new DocumentStore();
