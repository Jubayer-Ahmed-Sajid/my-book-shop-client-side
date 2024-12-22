import React from 'react';
import UseAuth from '../../../../../Hooks/UseAuth';
import useSellerBooks from '../../../../../Hooks/useSellerBooks';
import Loading from '../../../../../Components/Loading';

const MyBooks = () => {
    const {user} = UseAuth()
    const email = user?.email;
    const {data,isLoading,isError,refetch} = useSellerBooks({email})
  if(isLoading){
    return <div>
        <Loading></Loading>
    </div>
  }
    return (
        <div>
            
        </div>
    );
};

export default MyBooks;