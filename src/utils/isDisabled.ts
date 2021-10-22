import { toJS } from 'mobx';
import Access from '../models/Access';
import Status from '../models/Status';
import Version from '../models/Version';

const isDisabled = (
  selectedRole: Access = Access.VIEWER,
  version: Version
): boolean => {
  const { status, approvalStages } = version;

  if (!status) {
    return true;
  }
  switch (selectedRole) {
    case Access.EDITOR:
      return !(status === Status.SCATCH || status === Status.REFACTORING);
    case Access.DPP:
      return !(
        status === Status.APPROVING && approvalStages.dpp.acepted === false
      );
    case Access.UIB:
      return !(
        status === Status.APPROVING &&
        approvalStages.uib.acepted === false &&
        approvalStages.dpp.acepted === true
      );
    case Access.DISPATCH:
      return !(
        status === Status.APPROVING &&
        approvalStages.fku.acepted === false &&
        approvalStages.dpp.acepted === true &&
        !approvalStages.fku.reviwerRole
      );
    case Access.UIT:
      return !(
        status === Status.APPROVING &&
        approvalStages.uit.acepted === false &&
        approvalStages.fku.acepted === true
      );
    default:
      return !(
        status === Status.APPROVING &&
        selectedRole === approvalStages.fku.reviwerRole &&
        approvalStages.fku.acepted === false
      );
  }
};
export default isDisabled;
