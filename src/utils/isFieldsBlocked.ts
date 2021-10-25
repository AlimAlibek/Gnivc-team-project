import Access from '../models/Access';
import Status from '../models/Status';
import User from '../models/User';

// prettier-ignore
const isFieldsBlocked = (user: User, status: Status = Status.SCATCH, reviwer: string, userName: string): boolean => {
  const role = user.role ?? Access.VIEWER;
  switch (status) {
    case Status.SCATCH:
    case Status.REFACTORING:
      return !(role === Access.EDITOR);
    case Status.APPROVING:
      return !(userName === reviwer);
    default:
      return true;
  }
};
export default isFieldsBlocked;
