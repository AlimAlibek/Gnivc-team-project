import Access from './Access'

interface ApprovalStage{
acepted:boolean;
approvedDate:string;
approvedTime:string;
label:string;
reviwer: string;
reviwerRole?:Access|''
}
export default ApprovalStage