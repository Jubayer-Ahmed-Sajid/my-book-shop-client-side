import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useAdminBooks = () => {
    const axiosSecure = useAxiosSecure();
    const {data,isLoading,isError,refetch} = useQuery({
        queryKey:["all-books"],
        queryFn:()=>{
            return axiosSecure.get("/admin-books")
        }
    })
    return {data,isLoading,isError,refetch}
};

export default useAdminBooks;