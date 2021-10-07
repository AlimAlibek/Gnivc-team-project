import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import Select, {Option} from '@ff/ui-kit/lib/Select';
import  Typography from "@ff/ui-kit/lib/Typography";


import userStore from '../../stores/userStore';

const Login: React.FC = observer(() => {
 
  // Пару раз сервер входил в странный цикл вечно получая список юзеров, если что ставьте любую константу в юз эффект оно починится.
  const { users, fetchUsers,  selectedUser, isLoading, selectUser } = userStore;
  useEffect(() => {
    fetchUsers();
  }, []);

  if (isLoading) {
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
        onChange={(e) => selectUser(e)}
      />
      <Typography> {seletedName}</Typography>
    </div>
  );
});
export default Login;
