import React from "react";
import { useParams } from "react-router-dom";
import useBookDetails from "../Hooks/useBookDetails";
import { MdAddShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { toast } from "sonner";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useUserDetails from "../Hooks/useUserDetails";
import PageTitle from "./PageTitle";
import useAuth from "../Hooks/UseAuth";
import Loading from "./Loading";

const BookDetails = () => {
  const { id } = useParams();

  const { data, isLoading, isError, refetch } = useBookDetails({ id });
  const { data: userDetails,refetch:userRefetch } = useUserDetails();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const email = user?.email;
if(isLoading){
  return <Loading/>
}
  const handleAddToCart = async () => {
    try {
      const res = await axiosSecure.patch("/users/add-cart", {
        email,
        id,
      });
      
      toast.success("Product added to cart");
      refetch();
      userRefetch();
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
      toast.success("Product added to wishlist");
      refetch();
      userRefetch();
    } catch (error) {
      toast.error(`${error.message}`);
    }
  };
  const { title, author, image, price, stock, category, description } =
    data || {};
  const isSeller = userDetails?.data?.role == "seller";
  const isAdmin = userDetails?.data?.isAdmin;
  const cart = userDetails?.data?.cart || [];
  const wishlist = userDetails?.data?.wishlist || [];
  const isFound = cart.find((item) => item === id);
  const isFoundWishlist = wishlist.find((item) => item === id);

  return (
    <div className="w-full p-8">
      <PageTitle title={"Book Details"}></PageTitle>
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
            <div className="lg:flex mt-4 lg:space-y-0 space-y-2 justify-between">
              <button
                disabled={isFound || isAdmin || isSeller}
                onClick={handleAddToCart}
                className={`lg:w-1/3 border-none items-center justify-center flex gap-2 w-full py-2 px-4 rounded-lg transition-colors ${
                  isFound || isAdmin || isSeller
                    ? "bg-gray-400 cursor-not-allowed text-gray-700"
                    : "text-white bg-accent hover:bg-accent/80"
                }`}
              >
                <MdAddShoppingCart className="text-2xl" />
                Add to cart
              </button>
              <button
                disabled={isFoundWishlist || isAdmin || isSeller}
                className={`lg:w-1/3 border-none items-center justify-center flex gap-2 w-full py-2 px-4 rounded-lg transition-colors ${
                  isFoundWishlist || isAdmin || isSeller
                    ? "bg-gray-400 cursor-not-allowed text-gray-700"
                    : "text-white bg-error hover:bg-error/80"
                }`}
                onClick={handleWishlist}
              >
                <FaRegHeart className="text-2xl" />
                Add to wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
