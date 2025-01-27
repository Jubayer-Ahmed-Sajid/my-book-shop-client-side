import React from 'react';
import useAuth from '../../Hooks/useAuth';
import Loading from '../../Components/Loading';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const navigate=useNavigate()
    const location = useLocation(); 
    const {user,loading} = useAuth();

    if(loading){
        return <Loading></Loading>
    }
    if(user && !loading){
        return children;
    }
    return <Navigate to="/login" state={{from:location.pathname}}></Navigate>   
    
};

export default PrivateRoute;