import axios from 'axios';
import { API_BASE_URL } from './endpoints.jsx';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Helper to get token (customize as needed)
const getToken = () => localStorage.getItem('token');

// Helper to merge auth header if needed
const withAuth = (config = {}) => {
  if (config.auth) {
    const token = getToken();
    return {
      ...config,
      headers: {
        ...config.headers,
        Authorization: token ? `Bearer ${token}` : undefined,
      },
    };
  }
  return config;
};

// Request interceptor (optional, for global logic)
apiClient.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

// Response interceptor (handle global errors, etc.)
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // You can handle global errors here
    return Promise.reject(error);
  }
);

export const get = (url, config = {}) => apiClient.get(url, withAuth(config));
export const post = (url, data, config = {}) => apiClient.post(url, data, withAuth(config));

export default apiClient; 