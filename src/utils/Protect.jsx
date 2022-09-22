import { useState, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";

function checkLogStatus() {
  const logged = window.localStorage.getItem("login");
  window.localStorage.setItem("userRedirect", logged);
}

checkLogStatus();

const Protect = () => {
  return window.localStorage.getItem("userRedirect") == 'Allowed' ? <Outlet /> : <Navigate to="/login" />;
};

export default Protect;
