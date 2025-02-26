import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { userIsLogin } from "../../store/Slices/authSlice";

  const ProtectedRoute = ({ children }) => {
  const isLoggedIn = useSelector(userIsLogin); 
//  const isLoggedIn= localStorage.getItem('idToken')

  if (!isLoggedIn) {
    return <Navigate to="/auth" replace />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
