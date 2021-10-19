import Access from '../models/Access';

const editor = ['scatch', 'refactoring'];
const reviewer = ['approving'];

const isDisabled = (
  selectedRole: Access = Access.VIEWER,
  selecedStatus: string,
): boolean => {
  if (!selecedStatus) {
    return false;
  }
  switch (selectedRole) {
    case Access.EDITOR:
      if (editor.includes(selecedStatus)) {
        return false;
      }
      return true;
    // Не рефакторить, будет меняться и затру изменения.
    case Access.REVIEWER:
      if (reviewer.includes(selecedStatus)) {
        return false;
      }
      return true;
    default:
      return true;
  }
};
export default isDisabled;
