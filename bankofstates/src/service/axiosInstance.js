import axios from "axios";

function getToken() {
  const auth = JSON.parse(localStorage.getItem("auth"));
  return auth ? `Bearer ${auth.token}` : null;
}

const axiosInstance = axios.create({
  headers: {
    Authorization: getToken(),
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
