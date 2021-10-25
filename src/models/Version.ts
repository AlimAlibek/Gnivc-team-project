import Comment from './Comment';
import DocumentFile from './DocumentFile';
import Status from './Status';
import ApprovalStages from './ApprovalStages';

interface Version {
  version: string;
  status: Status;
  contour: string;
  priority: string;
  label: string;
  packageType: string;
  gk: string;
  versionCode: string
  responsiblePerson: string;
  responsibleUserName: string;
  type: string;
  createdAt: string;
  approvedStartAt: string;
  approvedEndAt: string;
  activeReviewer: string;
  files: DocumentFile[]|[];
  comments: Comment[];
  approvalStages: ApprovalStages;
}
export default Version;
