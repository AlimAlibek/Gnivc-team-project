import React from 'react';
import { TextField } from '@ff/ui-kit';

const NameInput: React.FC = () => (
  <TextField
    name="floating-label"
    label="Наименование"
    labelStyle="floating"
    fullWidth
  />
);
export default NameInput;
