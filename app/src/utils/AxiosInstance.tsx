import axios from 'axios';
import { LOCAL_URL } from '../constants/Config';

// Retrieve the token from local storage
const responseString = localStorage.getItem('admin');
const data = JSON.parse(responseString);
const token = data?.data?.token;

// Create an Axios instance with base URL and default configurations
const httpClient = axios.create({
  baseURL: LOCAL_URL,
  timeout: 10000, // Increase the timeout if needed
  headers: {
    'Authorization': `Bearer ${token}` // Set the authorization header with the token
  }
});

// Add request interceptor to modify outgoing requests before they are sent
httpClient.interceptors.request.use(
  (config) => {
    // You can add additional logic here if needed
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

// Add response interceptor to handle responses
httpClient.interceptors.response.use(
  (response) => {
    // You can modify response data here if needed
    return response;
  },
  (error) => {
    // Handle response error
    return Promise.reject(error);
  }
);

export default httpClient;
