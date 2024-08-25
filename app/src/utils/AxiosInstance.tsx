import axios from 'axios';
import { LOCAL_URL } from '../constants/Config';

// Retrieve the token from local storage
const responseString = localStorage.getItem('admin');
let token: string | null = null;

if (responseString) {
  try {
    const data = JSON.parse(responseString);
    token = data?.data?.token || null;
  } catch (error) {
    console.error('Failed to parse admin data from localStorage:', error);
  }
}

// Create an Axios instance with base URL and default configurations
const httpClient = axios.create({
  baseURL: LOCAL_URL,
  timeout: 10000,
  headers: {
    'authorization': token ? `Bearer ${token}` : '' // Set the authorization header with the token
  }
});

httpClient.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

httpClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default httpClient;
