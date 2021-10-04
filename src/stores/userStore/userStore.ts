import { makeAutoObservable } from 'mobx';
import { AxiosResponse } from 'axios';

import IPerson from '../../models/interfaces/Person';
import httpClient from '../_api';

class UserStore {
  selectedUser: IPerson | null = null;

  users: IPerson[] = [];

  isLoading = false;

  error = '';

  constructor() {
    makeAutoObservable(this);
  }

  setError(error: string) {
    this.error = error;
  }

  setIsLoading(boolean: boolean) {
    this.isLoading = boolean;
  }

  setUsers(users: IPerson[] = []) {
    this.users = [...users];
  }

  selectUser(userName: string | string[]) {
    // По стандарту ивент он чейнж передает так, не смотря на то, что по факту передается просто строка.
    console.log(userName);
    const obj = this.users.find((users) => users.userName === userName);
    if (obj) this.selectedUser = obj;
  }

  fetchUsers() {
    this.setIsLoading(true);
    this.fetchData()
      .then((response) => this.setUsers(response.data))
      .catch((error) => {
        this.setError(error.messsage);
      })
      .finally(() => this.setIsLoading(false));
  }

  fetchData(): Promise<AxiosResponse<IPerson[]>> {
    return httpClient.get<IPerson[]>('/responsiblePersons');
  }
}
export default new UserStore();
