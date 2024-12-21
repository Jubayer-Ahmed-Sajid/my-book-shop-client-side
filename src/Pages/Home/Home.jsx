import React from 'react';
import UseAuth from '../../Hooks/UseAuth';
import useUserDetails from '../../Hooks/useUserDetails';

const Home = () => {
    const data = useUserDetails()
    console.log(data?.data)
    return (
        <div>
            <h2 className="text-3xl">This is home</h2>
        </div>
    );
};

export default Home;