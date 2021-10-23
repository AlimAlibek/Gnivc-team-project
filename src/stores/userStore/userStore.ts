import { makeAutoObservable } from 'mobx';

import User from '../../models/User';
import service from './userStore.service';

class UserStore {
  selectedUser: User | undefined = undefined;

  users: User[] = [];

  isLoading = false;

  error = '';

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
    this.fetchUsers();
  }

  setUser(userName: string | string[]) {
    this.selectedUser = this.users.find((users) => users.userName === userName);
  }

  setUsers(users: User[] = []) {
    this.users = users;
  }

  setIsLoading(boolean: boolean) {
    this.isLoading = boolean;
  }

  setError(error: string) {
    this.error = error;
  }

/*eslint-disable */

  filterByMyRole(): User[] | undefined {
    const role = this.selectedUser?.role;
    const myUserName = this.selectedUser?.userName;
    if (role) { return this.users.filter((user) => user.role === role && user.userName !== myUserName); }
  }
  
  /* eslint-enable */

  get role() {
    return this.selectedUser?.role;
  }

  get name() {
    return this.selectedUser?.name ?? 'Гость';
  }

  get userName() {
    return this.selectedUser?.userName ?? 'Unknown';
  }

  fetchUsers() {
    this.setIsLoading(true);
    service
      .fetchUsers()
      .then((data) => this.setUsers(data))
      .catch((error) => this.setError(error.messsage))
      .finally(() => this.setIsLoading(false));
  }
}
export default new UserStore();
