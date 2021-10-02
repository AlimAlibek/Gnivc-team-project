import React from 'react';
import { Select, TextField } from '@ff/ui-kit';

const TypeInput: React.FC = () => (
  <>
    <Select
      label="Тип пакета"
      options={[{ key: 1, value: 'first', label: 'Значение первое' }]}
      floatingLabel
      showSearch
      style={{ width: '40%' }}
    />
    <Select
      label="Пункт ГК"
      options={[{ key: 1, value: 'first', label: 'Значение первое' }]}
      style={{ width: '30%' }}
      floatingLabel
      showSearch
      fullWidth
    />
    <TextField
      name="floating-label"
      label="Код версии"
      labelStyle="floating"
      className="field-width_30"
    />
  </>
);
export default TypeInput;
