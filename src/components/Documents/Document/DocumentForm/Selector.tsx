import React from 'react';
import Select, { Option } from '@ff/ui-kit/lib/esm/components/Select';

interface Selector {
  options: Option[];
  action: (newValue: string | string[]) => void;
  disabled: boolean;
  value: string;
  style?: React.CSSProperties
}
const DocumentSelector: React.FC<Selector> = (props) => {
  const {
    options, action, disabled, value, style,
  } = props;
  return (
    <Select
      label="Контур"
      disabled={disabled}
      options={options}
      value={value}
      onChange={(e) => action(e)}
      floatingLabel
      showSearch
      fullWidth
      style={style}
    />
  );
};
export default DocumentSelector;
