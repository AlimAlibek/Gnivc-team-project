import React from 'react';
import { observer } from 'mobx-react';
import Select from '@ff/ui-kit/lib/Select';
import Typography from '@ff/ui-kit/lib/Typography';

import classes from './Login.module.scss';
import mapUsersIntoOptions from '../../utils/mapUsersIntoOptions';
import userStore from '../../stores/userStore';

const Login: React.FC = observer(() => {
  const { users, selectedUser, setUser } = userStore;
  const options = mapUsersIntoOptions(users);
  return (
    <div className={classes.component}>
      <Select
        className={classes.select}
        placeholder="Выберите пользователя"
        options={options}
        style={{ width: '300px' }}
        onChange={(e) => setUser(e)}
        showSearch
      />
      <Typography className={classes.hint}>
        {selectedUser
          && `Выбранный пользователь - ${selectedUser.name} ${selectedUser.role}`}
      </Typography>
    </div>
  );
});
export default Login;
