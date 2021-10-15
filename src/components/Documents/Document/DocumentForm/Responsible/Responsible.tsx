import React from 'react';
import Select from '@ff/ui-kit/lib/Select';

import documentVersionStore from '../../../../../stores/documentVersionStore';
import TextFields from '../../../../../models/interfaces/TextFields';

const Responsible: React.FC<TextFields> = ({ isDisbled }) => {
  const { version } = documentVersionStore;

  return (
    <Select
      label="Ответственный"
      options={[
        { key: 1, value: 'Владимир Горбунов', label: 'Владимир Горбунов' },
        { key: 2, value: 'Борис Хмельников', label: 'Борис Хмельников' },
      ]}
      fullWidth
      floatingLabel
      disabled={isDisbled}
      showSearch
    />
  );
};
export default Responsible;
