import { makeAutoObservable } from 'mobx';

class Auth {
  isAuthenticated = false;

  constructor() {
    makeAutoObservable(this);
  }
}

export default new Auth();
