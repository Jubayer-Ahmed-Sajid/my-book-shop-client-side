import React, { useState } from "react";
import Loading from "../../../../Components/Loading";
import useUserDetails from "../../../../Hooks/useUserDetails";
import useAuth from "../../../../Hooks/useAuth";
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
           <div className="text-error mx-auto col-span-3 lg:text-3xl font-bold h-screen items-center flex ">
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
