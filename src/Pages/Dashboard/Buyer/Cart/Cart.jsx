import React from "react";
import Loading from "../../../../Components/Loading";
import useUserDetails from "../../../../Hooks/useUserDetails";
import CartCard from "../../../../Components/CartCard";
import PageTitle from "../../../../Components/PageTitle";

const Cart = () => {
  const { data, isLoading, isError, refetch } = useUserDetails();
  let cart = [];
  if (!isLoading) {
    cart = data?.data?.cart;
  }

  return (
    <div className="md:grid grid-cols-3 gap-x-5 gap-y-8 p-4">
      <PageTitle title={"Cart"}></PageTitle>

      {!isLoading && cart?.length === 0 ? (
        <div className="text-error mx-auto col-span-3 lg:text-3xl font-bold h-screen items-center flex ">
          No items in cart
        </div>
      ) : (
        cart?.map((cartItem) => {
          return (
            <CartCard refetch={refetch} id={cartItem} key={cartItem}></CartCard>
          );
        })
      )}
    </div>
  );
};

export default Cart;
