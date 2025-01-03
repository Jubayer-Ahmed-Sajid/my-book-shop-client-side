import React from "react";
import useUserDetails from "../Hooks/useUserDetails";
import Loading from "./Loading";

const Book = ({ book }) => {
  const { title, author, category, price, stock, image } = book;
  const { data: userDetails, isLoading } = useUserDetails();
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  const email = userDetails?.data?.email;
  const id = book?._id;

  const isSeller = userDetails?.data?.role == "seller";
  const isAdmin = userDetails?.data?.isAdmin;
  const cart = userDetails?.data?.cart || [];
  const wishlist = userDetails?.data?.wishlist || [];
  const isFound = cart.find((item) => item === id);
  const isFoundWishlist = wishlist.find((item) => item === id);
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

  return (
    <div className="bg-white flex flex-col justify-between shadow-lg lg:h-[460px] rounded-lg overflow-hidden transform transition-transform hover:scale-105 duration-300">
      <img src={image} className="h-48 object-cover w-full" alt={title} />
      <div className="p-6">
        <h2 className="text-2xl font-bold text-primary mb-2">{title}</h2>
        <p className="text-lg font-semibold text-secondary">{author}</p>
        <p className="text-md text-gray-500 mb-4">{category}</p>
        <div className="flex justify-between items-center">
          <p className="text-lg font-semibold text-primary">
            Price: <span className="text-accent">${price}</span>
          </p>
          <p className="text-lg font-semibold text-primary">
            Stock: <span className="text-error">{stock}</span>
          </p>
        </div>
        <button
          disabled={isFound || isAdmin || isSeller}
          onClick={handleAddToCart}
          className={`mt-4 w-full py-2 px-4 rounded-lg transition-colors ${
            isFound || isAdmin || isSeller
              ? "bg-gray-400 cursor-not-allowed text-gray-700"
              : "bg-primary text-white hover:bg-indigo-700"
          }`}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Book;
