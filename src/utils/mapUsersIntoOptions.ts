import { Option } from '@ff/ui-kit/lib/Select';
import { v4 as uuidv4 } from 'uuid'

import User from '../models/User';

const mapUsersIntoOptions = (users: User[]): Option[] => users.map(({ userName, name }) => ({
  key: `${uuidv4()}`,
  label: name,
  value: userName,
}));

export default mapUsersIntoOptions;
