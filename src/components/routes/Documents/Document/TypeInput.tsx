import React from 'react';
import { Select, TextField } from '@ff/ui-kit';
import classes from "./Document.module.scss";

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
      className={classes.field_width_30}
    />
  </>
);
export default TypeInput;
