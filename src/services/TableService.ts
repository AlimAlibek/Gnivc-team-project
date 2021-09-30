import { AxiosResponse } from "axios";
import $api from "../api";

export default class TableService {
  static fetchDocuments(): Promise<AxiosResponse<Array<Document>>> {
    return $api.get<Array<Document>>("/documents");
  }
  static fetchDocument(name: string): Promise<AxiosResponse<Document>> {
    return $api.get<Document>("/documents/" + name);
  }
}
