import React from 'react';
import UseAuth from '../../Hooks/UseAuth';
import { Navigate, useLocation } from 'react-router-dom';
import useUserDetails from '../../Hooks/useUserDetails';
import Loading from '../../Components/Loading';

const SellerRoute = ({children}) => {
    const {user,loading} = UseAuth();
    if(loading){
        return <Loading></Loading>
    }
    const {data,isLoading,isError}= useUserDetails(user?.email);
    const location = useLocation();
    if(isLoading){
        return <Loading></Loading>
    }
    const {role,isAdmin}= data?.data;
    if(data?.data && !isLoading){
        if(role==="seller" || isAdmin){
            return children;
        }
    }
   return <Navigate to="/" state={{from:location.pathname}}></Navigate>
};

export default SellerRoute;