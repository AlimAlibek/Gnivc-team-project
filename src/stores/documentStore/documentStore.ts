import { makeAutoObservable } from 'mobx';

import service from './documentStore.service';
import ApprovalStage from '../../models/ApprovalStage';
import createVersion from '../../utils/createVersion';
import Version from '../../models/Version';
import Status from '../../models/Status';
import DocumentPackage from '../../models/DocumentPackage';
import Access from '../../models/Access';
import DocumentFile from '../../models/DocumentFile';
import Comment from '../../models/Comment';

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

  get isTheLastVersionFinished(): boolean | undefined {
    if (!this.documentPackage) {
      return false;
    }
    const { versions } = this.documentPackage;
    return versions[versions.length - 1].status === Status.APPROVED;
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

  setLastVersion(versions: Version[] | undefined) {
    if (versions) {
      this.setVersion(versions[versions.length - 1]);
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

  setStatus(status: Status) {
    if (this.version) {
      this.version.status = status;
      this.saveAndSend();
    }
  }

  approveDPP(userName: string) {
    if (this.version) {
      this.version.approvalStages.dpp = this.createStage(userName, 'dpp');
      this.version.approvedStartAt = new Date().toLocaleDateString('ru');
      this.version.activeReviewer = '';
      this.saveAndSend();
    }
  }

  approveUIB(userName: string) {
    if (this.version) {
      this.version.approvalStages.uib = this.createStage(userName, 'uib');
      this.version.activeReviewer = '';
      this.saveAndSend();
    }
  }

  approveUIT(userName: string) {
    if (this.version) {
      this.version.approvalStages.uit = this.createStage(userName, 'uit');
      this.version.approvedEndAt = new Date().toLocaleDateString('ru');
      this.version.activeReviewer = '';
      this.setStatus(Status.APPROVED);
    }
  }

  approveFKU(userName: string) {
    if (this.version) {
      this.version.approvalStages.fku = this.createStage(userName, 'fku');
      this.version.activeReviewer = '';
      this.saveAndSend();
    }
  }

  /*eslint-disable */

  saveAndSend() {
    const { documentPackage: doc, version } = this;
    if (doc && version) {
      doc.versions.map((oldVersion) => {
        if (oldVersion.version !== version.version) return oldVersion;
        return (oldVersion = version);
      });
      service.updateDocument(doc);
    }
  }

  /* eslint-enable */

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

  createNewDocument(document: DocumentPackage) {
    return service.createNewDocument(document);
  }

  addComent(comment: Comment) {
    const { documentPackage: doc } = this;
    if (doc) {
      service.addComment(doc, comment);
    }
  }

  addFile(file: DocumentFile) {
    const { documentPackage: doc } = this;
    if (doc) {
      service.addFile(doc, file);
    }
  }

  updateFile(file: DocumentFile, index: number) {
    const { documentPackage: doc } = this;
    if (doc) {
      service.updateFile(doc, file, index);
    }
  }

  createNewVersion(name: string, userName: string) {
    const { documentPackage: doc } = this;
    if (doc) {
      // prettier-ignore
      const newVersion = createVersion(`${doc.versions.length + 1}`, name, userName);
      doc.versions.push(newVersion);
      this.setVersion(newVersion);
    }
  }

  removeVersion() {
    const { documentPackage: doc, version, setLastVersion } = this;
    if (doc && version) {
      service.removeVersion(doc, version);
      setLastVersion(doc.versions);
    }
  }

  removeFile(index: number) {
    const { documentPackage: doc } = this;
    if (doc) {
      service.removeFile(doc, index);
    }
  }
}

export default new DocumentStore();
