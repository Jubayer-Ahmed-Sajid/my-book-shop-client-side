import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import useAxiosPublic from "./useAxiosPublic";
import UseAuth from "./UseAuth";

// Custom hook to fetch user details
const useUserDetails = () => {
  // Get the current user from the authentication context
  const { user } = UseAuth();
  const email = user?.email;
  console.log(email);

  // Get the axios instance with public configurations
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
