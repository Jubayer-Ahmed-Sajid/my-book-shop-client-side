import React from "react";
import Loading from "../../../../Components/Loading";
import useUserDetails from "../../../../Hooks/useUserDetails";
import UseAuth from "../../../../Hooks/UseAuth";
import CartCard from "../../../../Components/CartCard";

const Cart = () => {
  const { user, loading } = UseAuth();
  if (loading) {
    return <Loading></Loading>;
  }
  const email = user?.email;
  const { data, isLoading, isError, refetch } = useUserDetails(email);
  if (isLoading) {
    return <Loading></Loading>;
  }
  const cart = data?.data?.cart;

  return (
    <div className="md:grid grid-cols-3 gap-4 p-4">
      {
        cart?.length === 0 ? <div className='text-center text-accent_2 lg:text-2xl font-bold w-screen h-screen flex items-center justify-center'>No items in cart</div> :(
          cart?.map((cartItem) => {
            return <CartCard refetch={refetch} id={cartItem} key={cartItem}>
              
            </CartCard>
          }
        )
      )
      }
     
    </div>
  );
};

export default Cart;
