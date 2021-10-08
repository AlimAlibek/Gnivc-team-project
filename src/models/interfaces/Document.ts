import Version from './Version';

interface Document {
  id: string;
  title: string;
  versions: Version[];
}
export default Document;
