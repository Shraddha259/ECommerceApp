import axios, { AxiosInstance } from "axios";

const userAxiosInstance: AxiosInstance = axios.create({
  baseURL: "https://localhost:7295", 
  timeout: 10000, 
  headers: {
    "Content-Type": "application/json",
  },
});

// Add request interceptor
userAxiosInstance.interceptors.request.use(
  (config) => {
    // const token = localStorage.getItem("token");
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor
userAxiosInstance.interceptors.response.use(
  (response) => {

    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      console.error("Unauthorized. Redirecting to login...");
    }
    return Promise.reject(error);
  }
);

export default userAxiosInstance;
