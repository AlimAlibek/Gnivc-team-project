import React from 'react';
import TextField from '@ff/ui-kit/lib/TextField';

import documentsStore from '../../../../../stores/documentsStore';
import TextFields from '../../../../../models/interfaces/TextFields';

const NameInput: React.FC<TextFields> = ({ isDisbled, onChange }) => {
  const { document } = documentsStore;

  return (
    <TextField
      name="floating-label"
      label="Наименование"
      disabled={isDisbled}
      labelStyle="floating"
      fullWidth
      value={document?.title}
      onChange={onChange}
    />
  );
};
export default NameInput;
