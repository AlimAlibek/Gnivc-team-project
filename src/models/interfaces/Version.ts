import Status from '../enums/Status';
import Comment from './Comment';
import File from './File';

interface Version {
  version: string;
  status: Status;
  responsiblePerson: string;
  type: string;
  createdAt: string;
  approvedStartAt: string;
  approvedEndAt: string;
  approvingPerson: string;
  files: File[];
  comments: Comment[];
}
export default Version;
