import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';
import Loading from '../../Components/Loading';
import useUserDetails from '../../Hooks/useUserDetails';

const AdminRoutes = ({children}) => {
    const {user,loading} = UseAuth();
    const {data,isLoading,isError} = useUserDetails({email:user?.email});
    const isAdmin =data?.data?.isAdmin;
    const location = useLocation();
    if(loading){
        return <Loading></Loading>
    }
    if(user && !loading){
        if(isAdmin){
            console.log(isAdmin)
            return children;
        }
    }
    return <Navigate to="/" state={{from:location.pathname}}></Navigate>
  
};

export default AdminRoutes;