import { useState, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";

const Protect = () => {
  const [so, setSo] = useState(true)
  // const [directCheck, setDirectCheck] = useState("");
  // useEffect(() => {
  //   checkLogStatus();
  //   directTheUser();
  // }, []);

  // function checkLogStatus() {
  //   const logged = window.localStorage.getItem("login");
  //   window.localStorage.setItem("userRedirect", logged);
  // }

  // function directTheUser() {
  //   const data = window.localStorage.getItem("userRedirect");
  //   setDirectCheck(true);
  // }

  return so === true ? <Outlet /> : <Navigate to="/login" />;
};

export default Protect;
