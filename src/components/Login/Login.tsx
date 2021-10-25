import React from 'react';
import { observer } from 'mobx-react';
import Select from '@ff/ui-kit/lib/Select';
import Typography from '@ff/ui-kit/lib/Typography';

import classes from './Login.module.scss';
import mapUsersIntoOptions from '../../utils/mapUsersIntoOptions';
import userStore from '../../stores/userStore';
import translateRole from '../../utils/translateRole';

const Login: React.FC = observer(() => {
  const { users, role, setUser,name } = userStore;
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
        {role
          && `Выбранный пользователь - ${name} ${translateRole.get(role)}`}
      </Typography>
    </div>
  );
});
export default Login;
