import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import Select from '@ff/ui-kit/lib/Select';
import { Typography } from '@ff/ui-kit';
import userStore from '../../stores/userStore';
import UserSelect from '../../models/interfaces/UserSelect';

const Login: React.FC = observer(() => {
  useEffect(() => {
    userStore.fetchUsers();
  }, []);

  if (userStore.isLoading) {
    return <Typography.Title>Loading...</Typography.Title>;
  }
  const options: any = [];
  userStore.users.map((data) => {
    const item: UserSelect = {
      value: data.userName,
      label: data.name,
      id: data.id,
    };
    options.push(item);
  });

  const seletedName = userStore.selectedUser ? (
    
      `Выбранный юзер ${userStore.selectedUser.name} ${userStore.selectedUser.role}`
    
  ) : 'Выберете пользоватeля'

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
