import { Outlet, Navigate } from "react-router-dom";

const Protect = () => {
  let auth = {
    token: false,
  };
  return auth.token ? <Outlet /> : <Navigate to="/login" />;
};

export default Protect;
