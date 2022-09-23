import { Outlet, Navigate } from "react-router-dom";

const Protect = () => {
  function checkLogStatus() {
    const logged = window.localStorage.getItem("login");
    window.localStorage.setItem("userRedirect", logged);
  }

  checkLogStatus();

  return window.localStorage.getItem("userRedirect") == "Allowed" ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};

export default Protect;
