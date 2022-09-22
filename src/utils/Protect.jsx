import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { hasToken } from "../atoms";
import { Outlet, Navigate } from "react-router-dom";

const Protect = () => {
  const [directCheck, setDirectCheck] = useState(true);
  const [gotAccess, setGotAccess] = useRecoilState(hasToken);
  useEffect(() => {
    window.localStorage.setItem("userRedirect", gotAccess);
  }, [gotAccess]);

  useEffect(() => {
    const data = window.localStorage.getItem("userRedirect");
    console.log(`This data ${data}`)
    setDirectCheck(data);
  }, []);
  console.log(`This direct check ${directCheck}`);
  return directCheck ? <Outlet /> : <Navigate to="/login" />;
};

export default Protect;
