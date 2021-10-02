import { Select } from '@ff/ui-kit';
import React from 'react';

const options = [
  { key: 1, value: 'first', label: 'Значение первое' },
  { key: 2, value: 'second', label: 'Значение второе' },
  { key: 3, value: 'third', label: 'Значение третье' },
  { key: 4, value: 'fourth', label: 'Значение четвертое' },
  { key: 5, value: 'fifth', label: 'Значение пятое' },
  { key: 6, value: 'sixth', label: 'Значение шестое' },
];

const Version: React.FC = () => (
  <Select
    options={options}
    style={{ width: '300px' }}
    placeholder="Выберите значение из списка"
  />
);
export default Version;
