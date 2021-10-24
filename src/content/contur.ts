import { Option } from '@ff/ui-kit/lib/Select';
import { v4 as uuidv4 } from 'uuid';

const contur:Option[] = [
  { key: `contur1`, value: 'development', label: 'Cтенд разработки' },
  { key: `contur2`, value: 'test', label: 'Стенд тестировки' },
  { key: `contur3`, value: 'production', label: 'Стенд готовой продукции' },
];
export default contur;
