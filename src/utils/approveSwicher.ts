  import Access from '../models/Access';
   import documentStore from '../stores/documentStore';
  const {
    approveDPP,
    approveUIB,
    approveUIT,
    approveFKU,
  } = documentStore;

  const approveSwicher = (role:Access|undefined, userName:string) => {
    if (!role) return;
    switch (role) {
      case Access.DPP:
      return approveDPP(userName);
            case Access.UIB:
        return approveUIB(userName);
      case Access.UIT:
        return approveUIT(userName);
  
        default:
      return approveFKU(userName)
    }
  }
  export default approveSwicher