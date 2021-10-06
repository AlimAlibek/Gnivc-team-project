import React from 'react';

import Decide from '../../Decide';
import ApproveReturn from '../../ApproveReturn';

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
