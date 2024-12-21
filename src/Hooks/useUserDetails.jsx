import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import useAxiosPublic from "./useAxiosPublic";
import UseAuth from "./UseAuth";

const useUserDetails = () => {
    const axiosPublic = useAxiosPublic();
  const { user } = UseAuth();
  const email = user?.email;
  const {data,isLoading,isError,refetch } = useQuery({
    queryKey: ["users"],
    queryFn: ()=>{
        return  axiosPublic.get(`/user/${email}`)
    },

  });
  return {data,isLoading,isError,refetch};
};

export default useUserDetails;
