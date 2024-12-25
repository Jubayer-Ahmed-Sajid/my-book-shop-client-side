import React from "react";
import Loading from "./Loading";
import useBookDetails from "../Hooks/useBookDetails";
import { FaCartShopping } from "react-icons/fa6";
import { toast } from "sonner";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import UseAuth from "../Hooks/UseAuth";
import Swal from 'sweetalert2'

const CartCard = ({ id, refetch }) => {
  const { user, loading } = UseAuth();
  if (loading) {
    return <Loading></Loading>;
  }
  const email = user?.email;
  const { data, isLoading, isError } = useBookDetails({ id: id });
  const axiosSecure = useAxiosSecure();
  if (isLoading) {
    return <Loading></Loading>;
  }
  const book = data?.data;
  const { title, image, author, price, category, stock, description } = book;

  const handleRemoveItem = async () => {
    try {
      const res = await axiosSecure.patch("/users/remove-cart", {
        email,
        id,
      });
      refetch();
      toast.success("Product removed from cart");
      console.log(res?.data);
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
      })
      
     
    } catch (error) {
      toast.error(`${error}`);
    }
  };

  return (
    <div>
      <div className="bg-base-300 shadow-md space-y-2 rounded-md p-4">
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

        <div className="grid lg:grid-cols-2 my-3 gap-2">
          <button
            onClick={handleBuy}
            className="flex justify-center btn-primary btn items-center gap-3"
          >
            <FaCartShopping className="text-2xl"></FaCartShopping> Buy Now
          </button>

          <button
            onClick={handleRemoveItem}
            className="flex justify-center btn-primary btn  items-center gap-3"
          >
            Remove Item
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
