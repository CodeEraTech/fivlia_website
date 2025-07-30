import axios from 'axios';
import { API_BASE_URL, ENDPOINTS } from './endpoints.jsx';

// Create axios instance
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

// Get token from localStorage
const getToken = () => {
  return localStorage.getItem("token");
};

// Helper function to add auth headers
const withAuth = (config = {}) => {
  const token = getToken();
  return {
    ...config,
    headers: {
      ...config.headers,
      'Authorization': `Bearer ${token}`
    }
  };
};

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    // Add auth token if auth: true is set
    if (config.auth) {
      const token = getToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      localStorage.removeItem("token");
    }
    return Promise.reject(error);
  }
);

// Helper functions
export const get = (endpoint, config = {}) => {
  return apiClient.get(endpoint, config);
};

export const post = (endpoint, data, config = {}) => {
  return apiClient.post(endpoint, data, config);
};

export default apiClient; 