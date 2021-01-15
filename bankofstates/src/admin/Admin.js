import React from "react";
import "./Admin.css";

const Admin = () => {
  const auth = JSON.parse(localStorage.getItem("auth"));
  const user = auth.user;
  return (
    <div>
      Welcome {user?.firstName} {user?.lastName}
    </div>
  );
};

export default Admin;
