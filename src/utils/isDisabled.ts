import Access from '../models/Access';
import Status from '../models/Status';
import ApprovalStage from '../models/ApprovalStage';



const isDisabled = (
  selectedRole: Access = Access.VIEWER,
  selecedStatus: Status, 
): boolean => {
  let res = true
  if (!selecedStatus) {
    return res;
  }
  switch (selecedStatus) {
    case Status.SCATCH:
    case Status.REFACTORING:
      if (selectedRole===Access.EDITOR) {
       return false;
      }
      return true;
    case Status.APPROVING:
      if (selectedRole===Access.DPP) {
        return false;
      }
      return true;
    default:
      return true;
  }
};
export default isDisabled;
