import { useQuery } from '@tanstack/react-query';
import axios from 'axios';


const useSellerBooks = ({email}) => {
    const {data,isLoading,isError,refetch} = useQuery({
        queryKey:["seller-book", email],
        queryFn:()=>{
            return axios.get(`http://localhost:5000/added-books/${email}`)
        }
    })
    return {data,isLoading,isError,refetch}
};

export default useSellerBooks;