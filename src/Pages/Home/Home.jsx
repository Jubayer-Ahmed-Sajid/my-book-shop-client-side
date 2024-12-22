import React from 'react';
import UseAuth from '../../Hooks/UseAuth';
import useUserDetails from '../../Hooks/useUserDetails';
import Banner from './Home/Banner';
import Featured from './Home/Featured';
import FAQ from './Home/FAQ';
import ContactInfo from './Home/ContactInfo';
import Testimonials from './Home/Testimonials';

const Home = () => {
    const data = useUserDetails()
    console.log(data?.data)
    return (
        <div>
            <h2 className="text-3xl">This is home</h2>
            <Banner></Banner>
            <Featured></Featured>
            <FAQ></FAQ>
            <ContactInfo></ContactInfo>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;