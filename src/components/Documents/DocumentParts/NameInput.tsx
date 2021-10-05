import React from 'react';
import { TextField } from '@ff/ui-kit';

import TextFields from '../../../models/interfaces/TextFields';

const NameInput: React.FC<TextFields> = ({ isDisbled }) => (
  <TextField
    name="floating-label"
    label="Наименование"
    disabled={isDisbled}
    labelStyle="floating"
    fullWidth
  />
);
export default NameInput;
