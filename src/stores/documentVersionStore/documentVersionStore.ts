import { makeAutoObservable } from 'mobx';

import Version from '../../models/interfaces/Version';
import service from './documentVersionStore.service';

class DocumentVersionStore {
  version: Version | null = null;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  setVersion(number: string, versions: Version[]) {
    this.version = service.setVersion(number, versions);
  }

  setLastVersion(versions: Version[] | undefined) {
    if (versions) {
      this.version = versions[versions.length - 1];
    }
  }
}

export default new DocumentVersionStore();
