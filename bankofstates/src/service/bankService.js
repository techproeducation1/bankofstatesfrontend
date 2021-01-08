import axios from "axios";
import axiosInstance from "./axiosInstance";
const BASE_URL = "http://localhost:8080";

class BankService {
  login(userInfo) {
    return axios.post(BASE_URL + "/api/auth/login", userInfo);
  }
  register(userInfo) {
    return axios.post(BASE_URL + "/api/auth/register", userInfo);
  }
  user() {
    return axiosInstance.get(BASE_URL + "/api/test/user");
  }
}
export default new BankService();
