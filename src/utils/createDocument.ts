import DocumentPackage from '../models/DocumentPackage';
import createVersion from './createVersion';

// prettier-ignore
const createDocument = (id: string, name: string, userName: string): DocumentPackage => ({
  id,
  versions: [createVersion('1', name, userName)],
});
export default createDocument;
