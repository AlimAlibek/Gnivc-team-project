import { IVersion } from './IVersion';

export interface IDocument {
  id: string;
  title: string;
  versions: IVersion[];
}
