import axios from 'axios';

export const API_URL = 'http://localhost:8000/';

const httpClient = axios.create({ baseURL: API_URL });

export default httpClient;
