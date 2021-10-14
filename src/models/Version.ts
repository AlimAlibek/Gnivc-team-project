import Status from './Status';

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
