import React from 'react';

import Decide from '../buttonGroups/Decide';
import ApproveReturn from '../buttonGroups/ApproveReturn';

const buttonChoose = (isDisbled: boolean, role: string): JSX.Element | null => {
  let res = <></>;
  if (!isDisbled) {
    switch (role) {
      case 'editor':
        res = <Decide />;
        break;
      case 'reviewer':
        res = <ApproveReturn />;
        break;
      default:
        res = <></>;
    }
  }
  return res;
};
export default buttonChoose;
