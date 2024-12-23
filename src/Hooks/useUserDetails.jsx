import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import UseAuth from "./UseAuth";
import Loading from "../Components/Loading";

// Custom hook to fetch user details
const useUserDetails = () => {

  const { user,loading } = UseAuth();
  if(loading){
    return <Loading></Loading>
  }
  const email = user?.email;

  const axiosPublic = useAxiosPublic();

  // Use react-query to fetch user details based on email
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["users", email],
    queryFn: () => {
      return axiosPublic.get(`/user/${email}`);
    },
  });

  // Return the query result
  return { data, isLoading, isError, refetch };
};

export default useUserDetails;
