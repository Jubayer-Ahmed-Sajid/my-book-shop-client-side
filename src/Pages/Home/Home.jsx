import React from "react";
import UseAuth from "../../Hooks/UseAuth";
import useUserDetails from "../../Hooks/useUserDetails";
import Banner from "./Home/Banner";
import Featured from "./Home/Featured";
import FAQ from "./Home/FAQ";
import ContactInfo from "./Home/ContactInfo";
import Testimonials from "./Home/Testimonials";
import Categories from "./Home/Categories";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="container mx-auto">
        <Categories></Categories>
        <FAQ></FAQ>
        <Featured></Featured>
        <ContactInfo></ContactInfo>
        <Testimonials></Testimonials>
      </div>
    </div>
  );
};

export default Home;
