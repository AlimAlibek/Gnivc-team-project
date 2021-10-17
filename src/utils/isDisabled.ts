import Access from '../models/enums/Access';

const editor = ['scatch', 'refactoring'];
const reviewer = ['approving'];

const isDisabled = (selectedRole: Access = Access.VIEWER, selecedStatus: string): boolean => {
  if (!selecedStatus) { return false; }
  let res = true;
  switch (selectedRole) {
    case Access.EDITOR:
      if (editor.includes(selecedStatus)) { res = false; } break;
      // Не рефакторить, будет меняться и затру изменения.
    case Access.REVIEWER:
      if (reviewer.includes(selecedStatus)) { res = false; } break;
    default: res = true;
  }
  return res;
};
export default isDisabled;
