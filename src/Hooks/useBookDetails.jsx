import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const useBookDetails = ({id}) => {
    console.log(id)
    const {data,isLoading,isError,refetch} = useQuery({
        queryKey:[{id}],
        queryFn:()=>{
            return axios.get(`http://localhost:5000/books/${id}`)
        }
    })
   return {data,isLoading,isError,refetch}
};

export default useBookDetails;