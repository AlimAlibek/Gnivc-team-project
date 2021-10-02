import Status from '../enums/Status';
import IComment from './IComment';
import IFile from './IFile';

interface IVersion {
  version: string;
  status: Status;
  responsiblePerson: string;
  type: string;
  createdAt: string;
  approvedStartAt: string;
  approvedEndAt: string;
  approvingPerson: string;
  files: IFile[];
  comments: IComment[];
}
export default IVersion;
