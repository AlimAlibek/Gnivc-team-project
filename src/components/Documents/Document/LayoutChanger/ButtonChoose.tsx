import React from 'react';

import Decide from '../actionButtons/Decide';
import ApproveReturn from '../actionButtons/ApproveReturn';

const buttonChoose = (status: string | undefined, role: string): null | string => {
  if (role === 'editor' && status === 'scatch') return 'Deside';
  if (role === 'reviewer' && status === 'approving') return 'ApproveReturn';
  if (role === 'editor' && status === 'refactoring') return 'Refactoring';

  // if (status === "approved" || role === "reader") return null;
  // if (status === "approving" && role === "editor") return null;
  // if (role === "reviewer" && status !== "approving") return null;

  return null;
  // let res = true;
  //   switch () {
  //     case 'editor':
  //       res = <Decide />;
  //       break;
  //     case 'reviewer':
  //       res = <ApproveReturn />;
  //       break;
  //     default:
  //       res = <></>;
  //   }

  // return res;
};
export default buttonChoose;
