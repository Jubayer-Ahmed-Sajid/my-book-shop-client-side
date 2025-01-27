import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useBookDetails = ({ id }) => {
  const axiosSecure = useAxiosSecure();

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: [id],
    queryFn: async () => {
      const response = await axiosSecure.get(`/books/${id}`);
      return response.data;
    },
   
  });

  return { data, isLoading, isError, refetch };
};

export default useBookDetails;
