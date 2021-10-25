import { v4 as uuidv4 } from 'uuid';

import Status from '../models/Status';
import Version from '../models/Version';

const createVersion = (version: string, name: string, userName: string): Version => ({
  version,
  status: Status.SCATCH,
  contour: 'development',
  priority: 'high',
  label: '',
  packageType: 'familiarization',
  gk: '3.1.1',
  versionCode: uuidv4(),
  responsiblePerson: name,
  responsibleUserName: userName,
  type: 'Для согласования',
  createdAt: new Date().toLocaleDateString('ru'),
  approvedStartAt: '',
  approvedEndAt: '',
  activeReviewer: '',
  comments: [
    {
      text: 'Создал новую версию',
      person: name,
      createdAt: new Date().toLocaleDateString('ru'),
      time: new Date().toLocaleTimeString('ru'),
    },
  ],
  approvalStages: {
    dpp: {
      acepted: false,
      approvedDate: '',
      approvedTime: '',
      matchedRole: 'dpp',
      reviwer: '',
    },
    uit: {
      acepted: false,
      approvedDate: '',
      approvedTime: '',
      matchedRole: 'dpp',
      reviwer: '',
    },
    fku: {
      acepted: false,
      approvedDate: '',
      approvedTime: '',
      matchedRole: 'dpp',
      reviwer: '',
      reviwerRole: undefined,
    },
    uib: {
      acepted: false,
      approvedDate: '',
      approvedTime: '',
      matchedRole: 'dpp',
      reviwer: '',
    },
  },
});
export default createVersion;
