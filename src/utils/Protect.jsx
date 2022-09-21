import { useRecoilState } from "recoil";
import { hasToken } from "../atoms";
import { Outlet, Navigate } from "react-router-dom";

const Protect = () => {
  const [redirectUser, setRedirectUser] = useRecoilState(hasToken);

  return redirectUser ? <Outlet /> : <Navigate to="/login" />;
};

export default Protect;
