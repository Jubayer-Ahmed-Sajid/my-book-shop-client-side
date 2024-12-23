import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const UseAllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const {data,isLoading,isError,refetch} = useQuery({
        queryKey:["all-users"],
        queryFn:()=>{
            return axiosSecure.get("/all-users")
        }
    })
    return {data,isLoading,isError,refetch}
};

export default UseAllUsers;