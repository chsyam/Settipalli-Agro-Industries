import axios from 'axios';
import { getToken } from './get-token';

const http = axios.create({
  // Fall back to the mock JSON served from /public/api when the env var is missing
  baseURL: process.env.NEXT_PUBLIC_REST_API_ENDPOINT || '/api',
  timeout: 30000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

// Change request data/error here
http.interceptors.request.use(
  (config) => {
    const token = getToken();
    // config.headers.Authorization = {
    //   ...config.headers,
    //   Authorization: `Bearer ${token ? token : ''}`,
    // };
    config.headers.Authorization = `Bearer ${token ? token : ''}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default http;
