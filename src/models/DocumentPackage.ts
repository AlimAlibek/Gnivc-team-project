import Version from './Version';

interface DocumentPackage {
  id: string;
  title: string;
  versions: Version[];
}

export default DocumentPackage;
