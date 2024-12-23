import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';


const useSellerBooks = ({email}) => {
    const axiosSecure=useAxiosSecure();
    const {data,isLoading,isError,refetch} = useQuery({
        queryKey:["seller-book", email],
        queryFn:()=>{
            return axiosSecure.get(`/added-books/${email}`)
        }
    })
    return {data,isLoading,isError,refetch}
};

export default useSellerBooks;