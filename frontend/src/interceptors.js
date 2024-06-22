import axios from "axios";

const useInterceptor = () => {
  const baseURL = import.meta.env.VITE_API_URL; // Correctly accessing environment variable
  const instance = axios.create({
    baseURL: baseURL, 
    timeout: 10000 
  });

  instance.defaults.headers.common["Content-Type"] = "application/json";
  instance.defaults.headers.common["Accept"] = "application/json";

  return instance;
};

export default useInterceptor;
