import React from 'react';

import SaveCancel from '../../../layouts/DocumentParts/SaveCancel';

const allowSave = (isDisbled: boolean, role: string):JSX.Element => {
  if (!isDisbled && role === 'editor') {
    return <SaveCancel />;
  }
  return <></>;
};
export default allowSave;
