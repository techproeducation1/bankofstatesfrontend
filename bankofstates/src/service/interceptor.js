import axios from "axios";
const axiosInstance = axios.create();
axiosInstance.interceptors.request.use(
  (request) => {
    return request;
  },
  (err) => {
    throw err;
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    return err;
  }
);
export default axiosInstance;
