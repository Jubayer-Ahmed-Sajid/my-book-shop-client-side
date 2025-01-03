import React, { useState } from "react";
import Loading from "../../../../Components/Loading";
import useUserDetails from "../../../../Hooks/useUserDetails";
import UseAuth from "../../../../Hooks/UseAuth";
import WishlistCards from "../../../../Components/WishlistCards";
import PageTitle from "../../../../Components/PageTitle";
const Wishlist = () => {
 
  const { data, isLoading, isError, refetch } = useUserDetails();
  let wishlists = [];
  if (!isLoading) {
   wishlists = data?.data?.wishlist;
  }

  return (
    <div>
            <PageTitle title={"Wishlist"}></PageTitle>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-8 p-4">

        {!isLoading && wishlists.length === 0 ? (
          <div className="text-center text-error lg:text-2xl font-bold w-screen h-screen flex items-center justify-center">
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
