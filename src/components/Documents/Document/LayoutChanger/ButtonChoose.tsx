import React from 'react';

import Deside from '../../../layouts/DocumentParts/Decide';
import ApproveReturn from '../../../layouts/DocumentParts/ApproveReturn';

const buttonChoose = (isDisbled: boolean, role: string): JSX.Element => {
  let res = <></>;
  if (!isDisbled) {
    switch (role) {
      case 'editor':
        res = <Deside />; break;
      case 'reviewer':
        res = <ApproveReturn />; break;
      default: res = <></>;
    }
  }
  return res;
};
export default buttonChoose;
