import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosPublic from './useAxiosPublic';

const useFeaturedBooks = () => {
    const axiosPublic = useAxiosPublic()
  const {data,isLoading,isError} = useQuery({
    queryKey:['featured-books'],
    queryFn:()=>{
        return axiosPublic.get("/featured-books");
    },
    
        staleTime: 5 * 60 * 1000, // 5 minutes
        cacheTime: 10 * 60 * 1000, // 10 minutes
      
  })
  return {data,isLoading,isError};
};

export default useFeaturedBooks;