import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';
import Loading from '../../Components/Loading';

const AdminRoutes = () => {
    const {user,loading} = UseAuth();
    const location = useLocation();
    if(loading){
        return <Loading></Loading>
    }
    if(user && !loading){
        if(user.isAdmin){
            return children;
        }
    }
    return <Navigate to="/" state={{from:location.pathname}}></Navigate>
  
};

export default AdminRoutes;