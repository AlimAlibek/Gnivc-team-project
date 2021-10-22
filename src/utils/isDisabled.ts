import { toJS } from 'mobx';
import Access from '../models/Access';
import Status from '../models/Status';
import Version from '../models/Version';


const isDisabled = (
  selectedRole: Access = Access.VIEWER,
  version: Version
): boolean => {
  const { status, approvalStages } = version;
  console.log(selectedRole === Access.DPP && approvalStages.dpp.acepted === false)
  console.log(selectedRole === Access.DPP, `role`)
  console.log(approvalStages.dpp.acepted === false, `stage`)
  if (!status) {
    return true;
  }

  switch (status) {
    case Status.SCATCH:
    case Status.REFACTORING:
      if (selectedRole === Access.EDITOR) {
        return false;
      }
      return true;
    case Status.APPROVING:
      if (selectedRole === Access.DPP && approvalStages.dpp.acepted === false) {
        return false;
      }
      if (selectedRole === Access.UIB && approvalStages.uib.acepted === false) {
        return false;
      }
       if (
        selectedRole === Access.DISPATCH &&
        approvalStages.fku.acepted === false &&
        !approvalStages.fku.reviwerRole
      ) {
        return false;
      }
      if (
        selectedRole === approvalStages.fku.reviwerRole &&
        approvalStages.fku.acepted === false
      ) {
        return false;
      }
       if (selectedRole === Access.UIT && approvalStages.uit.acepted === false) {
        return false;
      }
      return true;
    default:
      return true;
  }
};
export default isDisabled;
