import React from "react";
import { useParams } from "react-router-dom";
import useBookDetails from "../Hooks/useBookDetails";
import { MdAddShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import UseAuth from "../Hooks/UseAuth";
import { toast } from "sonner";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Loading from "./Loading";
import useUserDetails from "../Hooks/useUserDetails";

const BookDetails = () => {
  const { id } = useParams();
  const { user,loading } = UseAuth();
  if(loading){
    return <Loading></Loading>
  }
  const email = user?.email;
  const axiosSecure = useAxiosSecure();
  const { data, isLoading, isError } = useBookDetails({ id });
  const { data:userDetails,refetch } = useUserDetails();
  
  if (isLoading) {
    return <Loading></Loading>;
  }

  

  const handleAddToCart = async () => {
    try {
      const res = await axiosSecure.patch("/users/add-cart", {
        email,
        id,
      });
      refetch();

      toast.success("Product added to cart");
    } catch (error) {
      toast.error(`${error}`);
    }
  };
  

  const handleWishlist = async () => {
    try {
      const res = await axiosSecure.patch("/users/add-wishlist", {
        email,
        id,
      });
      refetch();
      toast.success("Product added to wishlist");
    } catch (error) {
      toast.error(`${error.message}`);
    }
  };
  const { title, author, image, price, stock, category, description } =
    data?.data;
    const isSeller = userDetails?.data?.role;
    const isAdmin = userDetails?.data?.isAdmin;
    const cart = userDetails?.data?.cart || [];
    const wishlist = userDetails?.data?.wishlist || [];
    const isFound = cart.find((item) => item === id);
    const isFoundWishlist = wishlist.find((item) => item === id);
 

  return (
    <div className="w-full p-8">
      <p className="text-xl font-bold">{title}</p> by
      <span className="text-xl font-semibold text-blue-400 mb"> {author}</span>
      <div className="divider divider-accent"></div>
      <div className="lg:flex gap-12">
        <img src={image} className="lg:w-1/2 w-full object-cover" alt="" />
        <div className="flex flex-col justify-between">
          <p>
            <span className="text-md font-semibold">Description:</span>
            {description}
          </p>

          <div className="flex-end">
            <div className="flex justify-between">
              <p className="font-semibold">
                Price:$ <span className="text-primary">{price}</span>
              </p>
              <p className="font-semibold">
                Stock: <span className="text-primary">{stock}</span>
              </p>
            </div>
            <div className="lg:flex mt-4 space-y-2 justify-between">
              <button disabled={isFound ||isAdmin||isSeller }  onClick={handleAddToCart} className="btn lg:w-1/3 w-full btn-primary flex gap-2">
                <MdAddShoppingCart
                  className="text-2xl"
                 
                />
                Add to cart
              </button>
              <button disabled={isFoundWishlist ||isAdmin||isSeller}
                className="btn w-full lg:w-1/3 btn-primary flex gap-2"
                onClick={handleWishlist}
              >
                <FaRegHeart />
                Add to wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 justify-between">
        <button></button>
        <button></button>
      </div>
    </div>
  );
};

export default BookDetails;
