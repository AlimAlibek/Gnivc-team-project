import { makeAutoObservable } from 'mobx';

import Status from '../../models/enums/Status';
import Version from '../../models/interfaces/Version';
import service from './documentVersionStore.service';
import userStore from '../userStore';

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

  setStatus(status: Status) {
    if (this.version) { this.version.status = status; }
  }

  addComent(text: string) {
    const today = new Date().toLocaleString('ru').split(',');
    // toLocalDateString
    // toLocalTime
    const { selectedUser } = userStore;
    this.version?.comments.push({
      data: text,
      person: selectedUser?.name ?? 'Аноним',
      createdAt: today[0],
      time: today[1],
    });
  }
}

export default new DocumentVersionStore();
