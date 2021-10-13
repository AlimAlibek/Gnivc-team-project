import { makeAutoObservable } from 'mobx';
import Status from '../../models/enums/Status';

import Version from '../../models/interfaces/Version';
import service from './documentVersionStore.service';
import userStore from '../userStore';

const {selectedUser}=userStore

class DocumentVersionStore {
  version: Version | undefined = undefined;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  setVersion(number: string | number | undefined, versions: Version[] | undefined) {
    this.version = service.setVersion(number, versions);
  }

  setLastVersion(versions: Version[] | undefined) {
    if (versions) {
      this.version = versions[versions.length - 1];
    }
  }
  setStatus(status:Status){
    if(this.version){this.version.status=status}
    
  }
  addComent(text:string){ 
    this.version?.comments.push({
      data: text,
      person: userStore.selectedUser?.name??'Аноним',
      createdAt: new Date().toLocaleString("ru").split(',')[0],
      time: new Date().toLocaleString("ru").split(',')[1]
    })
  } 
}

export default new DocumentVersionStore();
