import Access from '../models/Access';
import Status from '../models/Status';
import User from '../models/User';

const isFieldsBlocked = (user: User, status: Status = Status.SCATCH, reviwer: string): boolean => {
  const role = user.role ?? Access.VIEWER;
  const { userName } = user;
  let res = true;
  switch (status) {
    case Status.SCATCH:
    case Status.REFACTORING:
      res = !(role === Access.EDITOR);
      break;
    case Status.APPROVING:
      res = !(userName === reviwer);
      break;
    default:
      break;
  }
  return res;
};
export default isFieldsBlocked;
