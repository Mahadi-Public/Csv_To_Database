import axios from "axios";

const useInterceptor = () => {
  const baseURL = import.meta.env.VITE_API_URL; // Correctly accessing environment variable
  const instance = axios.create({
    baseURL: baseURL, 
    timeout: 10000 
  });
  
  instance.interceptors.request.use((config) => {
    // Modify request config here, e.g., add headers
    return config;
  }, (error) => {
    return Promise.reject(error);
  });

  instance.interceptors.response.use((response) => {
    // Modify response data here, if needed
    return response;
  }, (error) => {
    return Promise.reject(error);
  });

  return instance;
};

export default useInterceptor;