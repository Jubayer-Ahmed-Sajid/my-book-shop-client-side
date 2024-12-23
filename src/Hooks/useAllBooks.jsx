import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

const userAllBooks = ({search,sorts,category,author}) => {
    const axiosPublic = useAxiosPublic()
    const{data,isLoading,isError,refetch} = useQuery({
        queryKey:["all-books",{search,sorts,category,author}],
        queryFn:async()=>{
            return await axiosPublic.get( `/all-books?title=${search}&sorts=${sorts}&category=${category}&author=${author}`)

        },
    })
    return {data,isLoading,isError,refetch};
};

export default userAllBooks;