import { makeAutoObservable, toJS } from 'mobx';

import service from './documentStore.service';
import createDocument from '../../utils/createDocument';
import ApprovalStage from '../../models/ApprovalStage';
import isDisabled from '../../utils/isDisabled';
import userStore from '../userStore';
import createVersion from '../../utils/createVersion';
import Version from '../../models/Version';
import Status from '../../models/Status';
import DocumentPackage from '../../models/DocumentPackage';
import Access from '../../models/Access';

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
  }

  setVersion(version: Version) {
    this.version = version;
  }

  setFkuRole(role: Access) {
    if (this.version) {
      this.version.approvalStages.fku.reviwerRole = role;
    }
  }

  setIsLoading(boolean: boolean) {
    this.isLoading = boolean;
  }

  setError(error: string) {
    this.error = error;
  }

  setActiveRewier(name: string) {
    if (this.version) {
      this.version.activeReviewer = name;
    }
  }

  createStage(userName: string, label: string): ApprovalStage {
    return {
      acepted: true,
      approvedDate: new Date().toLocaleDateString('ru'),
      approvedTime: new Date().toLocaleTimeString('ru'),
      matchedRole: label,
      reviwer: userName,
    };
  }

  setLastVersion(versions: Version[] | undefined) {
    if (versions) {
      this.version = versions[versions.length - 1];
    }
  }

  createNewVersion() {
    const { name } = userStore;
    let newVersion;
    if (this.documentPackage && name) {
      newVersion = createVersion(
        `${this.documentPackage.versions.length + 1}`,
        name
      );
      this.documentPackage.versions.push(newVersion);
      this.version = newVersion;
    }
  }

  createNewDocument(id: string, title: string) {
    const { name } = userStore;
    const res = createDocument(id, name, title);
    service.postDoc(res);
  }

  deleteVersion() {
    const { documentPackage, version } = this;
    if (!documentPackage) return;
    documentPackage.versions = documentPackage.versions.filter(
      (oldVersion) => oldVersion.version !== version?.version
    );
    service.patchDoc(documentPackage);
    this.setLastVersion(documentPackage.versions);
  }

  setStatus(status: Status) {
    if (this.version) {
      this.version.status = status;
      this.saveAndSend();
    }
  }

  isBlocked(): boolean {
    const { role } = userStore;
    if (this.version) return isDisabled(role, this.version);
    return true;
  }

  saveAndSend() {
    if (this.documentPackage && this.version) {
      this.documentPackage.versions.map((oldVersion) => {
        if (oldVersion.version !== this.version?.version) return oldVersion;
        return (oldVersion = this.version);
      });
      service.patchDoc(this.documentPackage);
    }
  }

  approveDPP(userName: string) {
    if (this.version) {
      this.version.approvalStages.dpp = this.createStage(userName, 'dpp');
    }
  }

  approveUIB(userName: string) {
    if (this.version) {
      this.version.approvalStages.uib = this.createStage(userName, 'uib');
    }
  }

  approveUIT(userName: string) {
    if (this.version) {
      this.version.approvalStages.uit = this.createStage(userName, 'uit');
      this.version.status = Status.APPROVED;
    }
  }

  approveFKU(userName: string) {
    if (this.version) {
      this.version.approvalStages.fku = this.createStage(userName, 'fku');
    }
  }

  addComent(text: string) {
    const { name } = userStore;
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
