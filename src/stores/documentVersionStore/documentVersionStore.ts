import { makeAutoObservable } from 'mobx';

import Status from '../../models/enums/Status';
import Version from '../../models/interfaces/Version';
import service from './documentVersionStore.service';
import userStore from '../userStore';
import isDisabled from '../../utils/isDisabled';

class DocumentVersionStore {
  version: Version | null = null;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  setVersion(number: string, versions: Version[]) {
    this.version = service.setVersion(number, versions);
  }

  getStatus() {
    return this.version?.status ?? Status.SCATCH;
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
    const { getRole } = userStore;
    const res = isDisabled(getRole(), this.getStatus()) ?? true;

    return res;
  }

  addComent(text: string) {
    const { getName } = userStore;
    this.version?.comments.push({
      text: text,
      person: getName(),
      createdAt: new Date().toLocaleDateString('ru'),
      time: new Date().toLocaleTimeString('ru'),
    });
  }
}

export default new DocumentVersionStore();
