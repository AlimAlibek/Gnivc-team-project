import axios from 'axios';

// Используется в сторах версии и документов. Если переименовываешь то поменяй там тоже.

const API_URL = 'http://localhost:8000/';
const httpClient = axios.create({ baseURL: API_URL });
export default httpClient;
