import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import Loading from "../../Components/Loading";
import useUserDetails from "../../Hooks/useUserDetails";

const AdminRoutes = ({ children }) => {
  const { user, loading } = UseAuth();
  const location = useLocation();

  if (loading) {
    return <Loading />;
  }

  const { data, isLoading, isError } = useUserDetails({ email: user?.email });

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  const isAdmin = data?.data?.isAdmin;

  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace />;
};

export default AdminRoutes;
