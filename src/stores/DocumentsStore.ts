import axios from "axios";
import { makeAutoObservable } from "mobx";

import { IDocument } from "../models/interfaces/IDocument";
import TableService from "../services/DocumentsService";

class DocumentsStore {
  document: IDocument | null = null;
  documents: Array<IDocument> = [];
  isLoading: boolean = false;
  error: any = "";

  constructor() {
    makeAutoObservable(this);
  }

  setDocuments(arr: Array<IDocument>) {
    this.documents = arr;
  }

  setDocument(obj: IDocument) {
    this.document = obj;
  }

  setIsLoading(bool: boolean) {
    this.isLoading = bool;
  }

  setError(error: any) {
    this.error = error;
  }

  async fetchDocuments() {
    this.setIsLoading(true);
    try {
      const data = await TableService.fetchDocuments();
      this.setDocuments(data.data);
    } catch (error) {
      this.setError(error);
    } finally {
      this.setIsLoading(false);
    }
  }

  async fetchDocument(id: string) {
    this.setIsLoading(true);
    try {
      const data = await TableService.fetchDocument(id);
      this.setDocument(data.data);
    } catch (error) {
      this.setError(error);
    } finally {
      this.setIsLoading(false);
    }
  }
}

export default new DocumentsStore();
