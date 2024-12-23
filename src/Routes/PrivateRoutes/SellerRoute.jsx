import React from 'react';
import UseAuth from '../../Hooks/UseAuth';
import { Navigate, useLocation } from 'react-router-dom';

const SellerRoute = () => {
    const {user,loading} = UseAuth();
    const location = useLocation();
    if(loading){
        return <div>Loading...</div>
    }
    if(user && !loading){
        if(user.role==="seller" || user.isAdmin){
            return children;
        }
    }
   return <Navigate to="/" state={{from:location.pathname}}></Navigate>
};

export default SellerRoute;