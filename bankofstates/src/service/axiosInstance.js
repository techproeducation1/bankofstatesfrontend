import axios from "axios";

function getToken() {
  const auth = JSON.parse(localStorage.getItem("auth"));
  let token = null;
  if (auth && auth.isLoggedIn) {
    token = `${auth.tokenType} ${auth.token}`;
  }
  return token;
}

const axiosInstance = axios.create({
  headers: {
    Authorization: getToken(),
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
