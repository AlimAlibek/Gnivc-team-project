import React from 'react';
import TextField from '@ff/ui-kit/lib/TextField';
import Select from '@ff/ui-kit/lib/Select';

import documentVersionStore from '../../../../../stores/documentVersionStore';
import classes from '../../DocumentItem.module.scss';
import TextFields from '../../../../../models/interfaces/TextFields';

const TypeInput: React.FC<TextFields> = ({ isDisbled, onChange }) => {
  const { version } = documentVersionStore;
  return (
    <>
      <Select
        label="Тип пакета"
        options={[{ key: 1, value: 'Для согласования', label: 'Для согласования' }]}
        floatingLabel
        showSearch
        disabled={isDisbled}
        style={{ width: '40%' }}
      />
      <Select
        label="Пункт ГК"
        options={[{ key: 1, value: '3.1.2', label: '3.1.2' }]}
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
        value={version?.version}
      />
    </>
  );
};
export default TypeInput;
