import { makeAutoObservable } from "mobx";

import $api from "../api";
import { IDocument } from "../models/interfaces/IDocument";
import TableService from "../services/TableService";

class Docs {
  docs: Array<IDocument> = [];
  doc: IDocument = {} as IDocument;
  isLoading: boolean = false;
  error: string = "";
  constructor() {
    makeAutoObservable(this);
  }
  setDocs(arr: Array<IDocument>) {
    this.docs = arr;
  }
  setDoc(obj: IDocument) {
    this.doc = obj;
  }
  setIsLoading(bool: boolean) {
    this.isLoading = bool;
  }
  // async setDocs(docs:any){
  //   try {
  //       const data = await TableService.fetchDocuments();
  //       if(!data)

  //   } catch (error) {

  //   }
  // }
}

export default new Docs();
