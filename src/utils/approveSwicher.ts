import Access from '../models/Access';
import documentStore from '../stores/documentStore';

const {
  approveDPP,
  approveUIB,
  approveUIT,
  approveFKU,
} = documentStore;

const approveSwicher = (role: Access|undefined, userName: string): void => {
  if (!role) return;
  switch (role) {
    case Access.DPP:
      approveDPP(userName);
      break;
    case Access.UIB:
      approveUIB(userName);
      break;
    case Access.UIT:
      approveUIT(userName);
      break;

    default:
      approveFKU(userName);
      break;
  }
};
export default approveSwicher;
