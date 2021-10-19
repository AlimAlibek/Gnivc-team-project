import { Option } from '@ff/ui-kit/lib/Select';

import User from '../models/User';

const mapUsersIntoOptions = (users: User[]): Option[] => users.map(({ userName, name, id }) => ({
  key: id,
  label: name,
  value: userName,
}));

export default mapUsersIntoOptions;
