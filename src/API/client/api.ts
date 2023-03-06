import axios from 'axios';
const api = axios.create({
  baseURL: process.env.BackendApiURL,
});
export default api;
