import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import Select, {Option} from '@ff/ui-kit/lib/Select';
import { Typography } from '@ff/ui-kit';


import userStore from '../../stores/userStore';
import UserSelect from '../../models/interfaces/UserSelect';

const Login: React.FC = observer(() => {
  const dependendcyVar = 1;
  // Пару раз сервер входил в странный цикл получая юзеров, так что использую эту переменную как зависимость
  const { users, fetchUsers,  selectedUser  } = userStore;
  useEffect(() => {
    fetchUsers();
  }, [dependendcyVar]);

  if (userStore.isLoading) {
    return <Typography.Title>Loading...</Typography.Title>;
  }
  const options: Option[] = users.map((data) => ({
      value: data.userName,
      label: data.name,
      key: data.id,   
  }));
  

  const seletedName = selectedUser ? (
    `Выбранный юзер ${selectedUser.name} ${selectedUser.role}`

  ) : 'Выберете пользоватeля';

  return (
    <div>
      <Select
        label="Выберете юзера"
        placeholder="Выберите значение из списка"
        options={options}
        style={{ width: '400px' }}
        onChange={(e) => userStore.selectUser(e)}
      />
      <Typography> {seletedName}</Typography>
    </div>
  );
});
export default Login;
