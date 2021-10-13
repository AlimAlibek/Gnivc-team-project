const editor = ['scatch', 'refactoring'];
const reviewer = ['approving'];

const isDisabled = (selectedRole: string, selecedStatus: string): boolean => {
  // Тут поптом будут enum
  if (!selecedStatus) { return false; }
  let res = true;
  switch (selectedRole) {
    case 'editor':
      if (editor.includes(selecedStatus)) { res = false; } break;
    case 'reviewer':
      if (reviewer.includes(selecedStatus)) { res = false; } break;
    default: res = true;
  }
  return res;
};
export default isDisabled;
