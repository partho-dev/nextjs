import axios from "axios";

// Create an instance of Axios
const api = axios.create({
    baseURL: 'http://localhost:3001/api/v1',
    headers: {
      'Content-Type': 'application/json',
    },
  });


  // Add a request interceptor
api.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  
  // Add a response interceptor
  api.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response.status === 401) {
        // Handle 401 errors (e.g., redirect to login)
      }
      return Promise.reject(error);
    }
  );
  
  export default api;