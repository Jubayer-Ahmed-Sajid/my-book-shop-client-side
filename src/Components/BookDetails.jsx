import React from "react";
import { useParams } from "react-router-dom";
import useBookDetails from "../Hooks/useBookDetails";
import { MdAddShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import UseAuth from "../Hooks/UseAuth";
import { toast } from "sonner";
import axios from "axios";

const BookDetails = () => {
  const { id } = useParams();
  const {user} = UseAuth()
  const email = user?.email;
  const { data,isLoading,isError } = useBookDetails({ id });
  if(isLoading) {
    return <h2>Loading...</h2>
  }
  const handleAddToCart = async () => {
    try{
        const res = await axios.patch("http://localhost:5000/users/add-cart", {
          email,
          id,
        });

        toast.success("Product added to cart");
    }
    catch(error){
       toast.error(`${error}`)
    }
  };


  const handleWishlist = async () => {
    try{
        const res = await axios.patch("http://localhost:5000/users/add-wishlist", {
          email,
         id,
        });

        toast.success("Product added to wishlist");
    }
    catch(error){
       toast.error(`${error.message}`)
    }
  };
  console.log(data)
  const { title, author, image, price, stock, category, description } =data?.data;

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
            {description}{" "}
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
              <button className="btn lg:w-1/3 w-full btn-primary flex gap-2"><MdAddShoppingCart className="text-2xl" onClick={handleAddToCart}/> Add to cart </button>
              <button  className="btn w-full lg:w-1/3 btn-primary flex gap-2" onClick={handleWishlist}>
              <FaRegHeart />
                Add to wishlist</button>
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
