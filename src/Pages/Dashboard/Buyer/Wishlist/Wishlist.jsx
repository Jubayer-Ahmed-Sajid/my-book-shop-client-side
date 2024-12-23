import React, { useState } from "react";
import Loading from "../../../../Components/Loading";
import useUserDetails from "../../../../Hooks/useUserDetails";
import WishlistCard from "../../../../Components/wishlistCard";
import UseAuth from "../../../../Hooks/UseAuth";

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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {wishlists.length === 0 ? (
          <div className="text-center text-red-500 text-2xl font-bold w-screen h-screen flex items-center justify-center">
            No items in wishlist
          </div>
        ) : (
          wishlists.map((wishlist) => {
            return (
              <WishlistCard
                refetch={refetch}
                id={wishlist}
                key={wishlist}
              ></WishlistCard>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Wishlist;
