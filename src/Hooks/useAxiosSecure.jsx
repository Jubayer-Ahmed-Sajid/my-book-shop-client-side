import React from "react";
import { useEffect } from "react";
import axios from "axios";
import UseAuth from "./UseAuth";
import { useNavigate } from "react-router-dom";

const useAxiosSecure = () => {

    const {logout} = UseAuth();
    const navigate =useNavigate()
  // Create an axios instance
  const axiosSecure = axios.create({
    baseURL: "https://my-book-shop-backend.vercel.app",
    // baseURL: 'http://localhost:5000',
    withCredentials: true,
  });

  useEffect(() => {
    // request interceptor to include the JWT token in the headers
    const requestInterceptor = axiosSecure.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem("access-token");
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // response interceptor to handle errors
    const responseInterceptor = axiosSecure.interceptors.response.use(
      (response) => response,
      (error) => {
        // Handle token expiration or other errors
        if (
          (error.response && error.response.status === 401) ||
          (error.response && error.response.status === 400)
        ) {
          // Handle unauthorized access (e.g., redirect to login)
          logout();
          navigate("/login");
          console.error("Unauthorized access - possibly invalid token");
        }
        return Promise.reject(error);
      }
    );

    // Cleanup interceptors on unmount
    return () => {
      axiosSecure.interceptors.request.eject(requestInterceptor);
      axiosSecure.interceptors.response.eject(responseInterceptor);
    };
  }, [axiosSecure]);

  return axiosSecure;
};

export default useAxiosSecure;
