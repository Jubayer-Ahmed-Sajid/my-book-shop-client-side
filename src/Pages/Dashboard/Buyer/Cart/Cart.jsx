import React from 'react';
import Loading from '../../../../Components/Loading';
import useUserDetails from '../../../../Hooks/useUserDetails';
import UseAuth from '../../../../Hooks/UseAuth';
import CartCard from '../../../../Components/CartCard';

const Cart = () => {
    const {user,loading} = UseAuth();
    if(loading){
        return <Loading></Loading>
    }
    const email = user?.email;
    const {data,isLoading,isError,refetch}= useUserDetails(email);
    if(isLoading){
        return <Loading></Loading>
    }
    const cart = data?.data?.cart;


    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 p-4'>
            {
                cart.map((cart_id)=>{
                    return <CartCard refetch={refetch} id={cart_id} key={cart_id}>
                       
                    </CartCard>
                })
            }
            
        </div>
    );
};

export default Cart;