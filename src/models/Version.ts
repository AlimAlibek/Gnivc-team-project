import Comment from './Comment';
import DocumentFile from './DocumentFile';
import Status from './Status';
import ApprovalStages from './ApprovalStages'

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
  approvalStages:ApprovalStages;
}
export default Version;
