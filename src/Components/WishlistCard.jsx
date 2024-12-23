import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import useBookDetails from "../Hooks/useBookDetails";
import Loading from "./Loading";
import { toast } from "sonner";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import UseAuth from "../Hooks/UseAuth";

const WishlistCard = ({ id,refetch }) => {
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
    <div className="bg-base-300 shadow-md space-y-2 rounded-md p-6">
      <img src={image} className="h-32 object-cover mb-4 w-full" alt="" />
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="font-semibold">{author}</p>
      <p>{category}</p>
      <div className="flex gap-2 items-center justify-between">
        <p>
          Price:$ <span className="text-primary">{price}</span>
        </p>
        <p>
          Stock: <span className="text-primary">{stock}</span>
        </p>
      </div>
      <div className="grid lg:grid-cols-2 my-3 gap-1">
        <button onClick={handleAddToCart} className="flex justify-center btn-primary btn items-center gap-3">
          <FaCartShopping className="text-xl"></FaCartShopping>Add to Cart
        </button>

        <button onClick={handleRemoveItem} className="flex justify-center btn-primary btn  items-center gap-3">
          Remove Item
        </button>
      </div>
    </div>
  );
};

export default WishlistCard;
