import axios from "axios";

function getToken() {
  let auth = localStorage.getItem("auth");
  if (auth) {
    auth = JSON.parse(auth);
  }
  return auth ? `Bearer ${auth.token}` : null;
}

const axiosInstance = axios.create({
  headers: {
    Authorization: getToken(),
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
