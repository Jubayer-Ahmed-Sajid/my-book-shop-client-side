import React, { useState } from "react";
import Loading from "../../../../Components/Loading";
import useUserDetails from "../../../../Hooks/useUserDetails";
import UseAuth from "../../../../Hooks/UseAuth";
import WishlistCards from "../../../../Components/WishlistCards";
const Wishlist = () => {
  const { user, loading } = UseAuth();
  if (loading) {
    return <Loading></Loading>;
  }
  const email = user?.email;
  const { data, isLoading, isError, refetch } = useUserDetails(email);
  if (isLoading) {
    return <Loading></Loading>;
  }
  const wishlists = data?.data?.wishlist;

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-8 p-4">
        {wishlists.length === 0 ? (
          <div className="text-center text-accent_2 lg:text-2xl font-bold w-screen h-screen flex items-center justify-center">
            No items in wishlist
          </div>
        ) : (
          wishlists.map((wishlist) => {
            return (
              <WishlistCards
                refetch={refetch}
                id={wishlist}
                key={wishlist}
              ></WishlistCards>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Wishlist;
