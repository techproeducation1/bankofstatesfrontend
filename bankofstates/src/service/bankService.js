import axios from "axios";
import axiosInstance from "./axiosInstance";
const BASE_URL = "http://localhost:8081";

class BankService {
  login(userInfo) {
    return axios.post(BASE_URL + "/auth/login", userInfo);
  }
  register(userInfo) {
    return axios.post(BASE_URL + "/auth/register", userInfo);
  }
  balance() {
    return axiosInstance.get(BASE_URL + "/account/balance");
  }
}
export default new BankService();
