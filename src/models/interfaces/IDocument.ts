import IVersion from './IVersion';

interface IDocument {
  id: string;
  title: string;
  versions: IVersion[];
}
export default IDocument;
