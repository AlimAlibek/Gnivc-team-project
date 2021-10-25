import DocumentPackage from '../models/DocumentPackage';
import createVersion from './createVersion';

const createDocument = (id: string, name: string, title: string, userName: string): DocumentPackage => ({
  id,
  title,
  versions: [createVersion('1', name, userName)],
});
export default createDocument;
