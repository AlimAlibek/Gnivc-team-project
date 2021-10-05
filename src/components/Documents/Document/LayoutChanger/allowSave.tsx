import React from 'react';

import SaveCancel from '../../DocumentParts/SaveCancel';

const allowSave = (isDisbled: boolean, role: string):JSX.Element|null => {
  if (!isDisbled && role === 'editor') {
    return <SaveCancel />;
  }
  return null;
};
export default allowSave;
