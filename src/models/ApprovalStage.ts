import Access from './Access';

interface ApprovalStage{
  acepted: boolean;
  approvedDate: string;
  approvedTime: string;
  matchedRole: string
  reviwer: string;

  reviwerRole?: Access
}
export default ApprovalStage;
