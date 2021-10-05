import { makeAutoObservable } from 'mobx';
import { AxiosResponse } from 'axios';
import { toJS } from 'mobx';

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

  setError=(error: string)=> {
    this.error = error;
  }

  setIsLoading(boolean: boolean) {
    this.isLoading = boolean;
  }

  setUsers(users: Person[] = []) {
    this.users = [...users];
  }

  selectUser(userName: string | string[]) {
    // По стандарту ивент он чейнж передает так, не смотря на то, что по факту передается просто строка.
    console.log();
    const obj = this.users.find((users) => users.userName === userName);
    console.log(userName,toJS(obj) )
    
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
