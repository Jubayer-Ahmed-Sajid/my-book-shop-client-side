import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import useBookDetails from "../Hooks/useBookDetails";
import Loading from "./Loading";
import { toast } from "sonner";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import UseAuth from "../Hooks/UseAuth";

const WishlistCards = ({ id, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = UseAuth();
  if (loading) {
    return <Loading></Loading>;
  }
  const email = user?.email;
  const { data, isLoading, isError } = useBookDetails({ id: id });
  if (isLoading) {
    return <Loading></Loading>;
  }
  const book = data?.data;
  const { title, image, author, price, category, stock, description } = book;

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
  // Remove item from wishlist
  const handleRemoveItem = async () => {
    try {
      const res = await axiosSecure.patch("/users/remove-wishlist", {
        email,
        id,
      });
      refetch();
      toast.success("Product removed from wishlist");
      console.log(res?.data);
    } catch (error) {
      toast.error(`${error}`);
    }
  };

  console.log(book);
  return (
    <div className="bg-white flex flex-col justify-between shadow-lg lg:h-[430px] rounded-lg overflow-hidden transform transition-transform hover:scale-105 duration-300">
            <img src={image} className="h-40 object-cover w-full" alt="" />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-primary mb-2">{title}</h2>
              <p className="text-lg font-semibold text-secondary">{author}</p>
              <p className="text-md text-gray-500 mb-4">{category}</p>
              <div className="flex items-center justify-between">
                <p className="text-lg font-semibold text-primary">
                  Price:$ <span className="text-accent_1">{price}</span>
                </p>
                <p className="text-lg font-semibold text-primary">
                  Stock: <span className="text-accent_2">{stock}</span>
                </p>
              </div>
            </div>
    
            <div className="grid lg:grid-cols-2 mx-2 my-3 gap-2">
              <button
                onClick={handleAddToCart}
                className="flex justify-center text-white bg-accent_1 hover:bg-green-600 btn items-center gap-3"
              >
                <FaCartShopping className="text-2xl"></FaCartShopping>Add to Cart
              </button>
    
              <button
                onClick={handleRemoveItem}
                className="flex justify-center text-white hover:bg-red-600 btn bg-accent_2 border-none  items-center gap-3"
              >
                Remove Item
              </button>
            </div>
          </div>
  );
};

export default WishlistCards;