import React from 'react';
import TextField from '@ff/ui-kit/lib/TextField';
import Select from '@ff/ui-kit/lib/Select';

import classes from '../../DocumentItem.module.scss';
import TextFields from '../../../../../models/interfaces/TextFields';

const TypeInput: React.FC<TextFields> = ({ isDisbled }) => (
  <>
    <Select
      label="Тип пакета"
      options={[{ key: 1, value: 'first', label: 'Значение первое' }]}
      floatingLabel
      showSearch
      disabled={isDisbled}
      style={{ width: '40%' }}
    />
    <Select
      label="Пункт ГК"
      options={[{ key: 1, value: 'first', label: 'Значение первое' }]}
      style={{ width: '30%' }}
      floatingLabel
      showSearch
      disabled={isDisbled}
      fullWidth
    />
    <TextField
      name="floating-label"
      label="Код версии"
      disabled={isDisbled}
      labelStyle="floating"
      className={classes.field_width_30}
    />
  </>
);
export default TypeInput;
