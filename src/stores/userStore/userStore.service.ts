import httpClient from '../_api';
import User from '../../models/User';

const service = {
  async fetchUsers(): Promise<User[]> {
    const response = await httpClient.get<User[]>('/responsiblePersons');
    return response.data;
  },
};

export default service;
