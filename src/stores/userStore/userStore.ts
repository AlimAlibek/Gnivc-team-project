import { makeAutoObservable, toJS } from 'mobx';
import { AxiosResponse } from 'axios';

import Access from '../../models/enums/Access';
import Person from '../../models/interfaces/Person';
import httpClient from '../_api';

class UserStore {
  selectedUser: Person | null = null;

  users: Person[] = [];

  isLoading = false;

  error = '';

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  setError = (error: string) => {
    this.error = error;
  };

  setIsLoading(boolean: boolean) {
    this.isLoading = boolean;
  }

  setUsers(users: Person[] = []) {
    this.users = [...users];
  }

  getRole() {
    return this.selectedUser?.role ?? Access.VIEWER;
  }

  getName() {
    return this.selectedUser?.name ?? 'Гость';
  }

  selectUser(userName: string | string[]) {
    console.log();
    const obj = this.users.find((users) => users.userName === userName);
    console.log(userName, toJS(obj));

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

  fetchData(): Promise<AxiosResponse<Person[]>> {
    return httpClient.get<Person[]>('/responsiblePersons');
  }
}
export default new UserStore();
