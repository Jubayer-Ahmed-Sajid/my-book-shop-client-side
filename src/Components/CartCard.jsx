import React from "react";
import Loading from "./Loading";
import useBookDetails from "../Hooks/useBookDetails";
import { FaCartShopping } from "react-icons/fa6";
import { toast } from "sonner";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import UseAuth from "../Hooks/UseAuth";
import Swal from "sweetalert2";

const CartCard = ({ id, refetch }) => {
  const { user, loading } = UseAuth();
  
  const email = user?.email;
  const { data, isLoading, isError } = useBookDetails({ id: id });
  const axiosSecure = useAxiosSecure();
  let book = {};
  if (!isLoading) {
    book = data?.data;
  }
  const { title, image, author, price, category, stock, description } = book;

  const handleRemoveItem = async () => {
    try {
      const res = await axiosSecure.patch("/users/remove-cart", {
        email,
        id,
      });
      refetch();
      toast.success("Product removed from cart");
      // console.log(res?.data);
    } catch (error) {
      toast.error(`${error}`);
    }
  };

  const handleBuy = async () => {
    try {
      Swal.fire({
        title: "Are you sure you want to buy?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, buy it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const res = await axiosSecure.patch("/users/buy", {
            email,
            id,
          });
          refetch();
          toast.success("Product bought successfully");
        }
      });
    } catch (error) {
      toast.error(`${error}`);
    }
  };

  return (
   
      <div className="bg-white flex flex-col justify-between shadow-lg lg:h-[430px] rounded-lg overflow-hidden transform transition-transform hover:scale-105 duration-300">
        <img src={image} className="h-40 object-cover w-full" alt="" />
        <div className="p-6">
          <h2 className="text-2xl font-bold text-primary mb-2">{title}</h2>
          <p className="text-lg font-semibold text-secondary">{author}</p>
          <p className="text-md text-gray-500 mb-4">{category}</p>
          <div className="flex items-center justify-between">
            <p className="text-lg font-semibold text-primary">
              Price:$ <span className="text-accent">{price}</span>
            </p>
            <p className="text-lg font-semibold text-primary">
              Stock: <span className="text-error">{stock}</span>
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 mx-2 my-3 gap-2">
          <button
            onClick={handleBuy}
            className="flex justify-center text-white bg-accent hover:bg-green-600 btn items-center gap-3"
          >
            <FaCartShopping className="text-2xl"></FaCartShopping> Buy Now
          </button>

          <button
            onClick={handleRemoveItem}
            className="flex justify-center text-white hover:bg-red-600 btn bg-error border-none  items-center gap-3"
          >
            Remove Item
          </button>
        </div>
      </div>
    
  );
};

export default CartCard;
