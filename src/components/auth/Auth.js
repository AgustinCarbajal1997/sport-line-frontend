import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const Auth = ({ user }) => {
  const location = useLocation();
  if (!user) {
    return <Navigate to={"/iniciar-sesion"} replace state={{ from: location }} />;
  }
  return <Outlet />;
};

export default Auth;
