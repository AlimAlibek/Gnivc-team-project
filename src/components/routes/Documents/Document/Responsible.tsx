import React from 'react';
import { Select } from '@ff/ui-kit';

const Responsible: React.FC = () => (
  <Select
    label="Ответственный"
    options={[{ key: 1, value: 'first', label: 'Значение первое' }]}
    fullWidth
    floatingLabel
    showSearch
  />
);
export default Responsible;
