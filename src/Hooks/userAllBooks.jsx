import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosPublic from './useAxiosPublic';

const userAllBooks = () => {
    const axiosPublic = useAxiosPublic()
    const{data,isLoading,isError,refetch} = useQuery({
        queryKey:["all-books"],
        queryFn:async()=>{
            return await axiosPublic.get("/all-books")

        }
    })
    return {data,isLoading,isError,refetch};
};

export default userAllBooks;