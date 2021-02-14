import axios from "axios";

function getToken() {
  console.log("Get Toekn got trigerred");
  let auth = localStorage.getItem("auth");
  if (auth) {
    auth = JSON.parse(auth);
    console.log("Auth = ", auth?.token);
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
