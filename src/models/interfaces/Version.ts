import Status from '../enums/Status';
import Comment from './Comment';
import DocumentFile from './DocumentFile';

interface Version {
  version: string;
  status: Status;
  contour: string;
  priority: string;
  responsiblePerson: string;
  type: string;
  createdAt: string;
  approvedStartAt: string;
  approvedEndAt: string;
  approvingPerson: string;
  files: DocumentFile[];
  comments: Comment[];
}
export default Version;
