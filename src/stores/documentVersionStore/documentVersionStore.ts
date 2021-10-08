import { makeAutoObservable } from 'mobx';

import Version from '../../models/interfaces/Version';
import service from './documentVersionStore.service';

class DocumentVersionStore {
  version: Version | undefined = undefined;

  constructor() {
    makeAutoObservable(this);
  }

  setVersion(number: string | number | undefined, versions: Version[] | undefined) {
    this.version = service.setVersion(number, versions);
  }

  setLastVersion(versions: Version[] | undefined) {
    if (versions) {
      this.version = versions[versions.length - 1];
    }
  }
}

export default new DocumentVersionStore();
