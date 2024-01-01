import axios from 'axios';

const token = JSON.parse(localStorage.getItem('token')) || null;

const baseURL = import.meta.env.VITE_APP_BASE_URL;

const headers = token === 'null' ? {} : { Authorization: `Bearer ${token}` };

const httpClient = axios.create({
  baseURL,
  headers,
});

export default httpClient;
