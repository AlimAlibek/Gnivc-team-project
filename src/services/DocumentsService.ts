import { AxiosResponse } from "axios";
import { IDocument } from "../models/interfaces/IDocument";
import $api from "../api";

export default class TableService {
  static async fetchDocuments(): Promise<AxiosResponse<Array<IDocument>>> {
    const data = await $api.get<Array<IDocument>>("/documents");
    return data;
  }
  static async fetchDocument(id: string): Promise<AxiosResponse<IDocument>> {
    const data = await $api.get<IDocument>("/documents/" + id);
    return data;
  }
}
