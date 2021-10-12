import Access from "../models/enums/Access";
const editor = ['scatch', 'refactoring'];
const reviewer = ['approving'];

const isDisabled = (selectedRole: Access, selecedStatus: string): boolean => {
  // Тут поптом будут enum
  if (!selecedStatus) { return false; }
  let res = true;
  switch (selectedRole) {
    case Access.EDITOR:
      if (editor.includes(selecedStatus)) { res = false; } break;
    case Access.REVIEWER:
      if (reviewer.includes(selecedStatus)) { res = false; } break;
    default: res = true;
  }
  return res;
};
export default isDisabled;
