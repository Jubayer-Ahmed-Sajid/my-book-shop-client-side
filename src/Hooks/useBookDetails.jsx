import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useBookDetails = ({ id }) => {
  // console.log(id);
  const axiosSecure = useAxiosSecure();
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: [{ id }],
    queryFn: () => {
      return axiosSecure.get(`/books/${id}`);
    },
  });
  return { data, isLoading, isError, refetch };
};

export default useBookDetails;
