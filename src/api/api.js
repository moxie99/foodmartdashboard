import axios from 'axios';
const localBaseURL = 'http://localhost:5000/api';
const prodBaseURL = 'https://foodmart-o1ja.onrender.com/api';
const api = axios.create({
  baseURL: localBaseURL,
});
export default api;
