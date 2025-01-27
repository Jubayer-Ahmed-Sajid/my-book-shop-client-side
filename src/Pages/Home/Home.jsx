import React from "react";
import Banner from "./Home/Banner";
import Featured from "./Home/Featured";
import FAQ from "./Home/FAQ";
import ContactInfo from "./Home/ContactInfo";
import Testimonials from "./Home/Testimonials";
import Categories from "./Home/Categories";
import PageTitle from "../../Components/PageTitle";

const Home = () => {
  return (
    <div>
      <PageTitle title={"Home"}></PageTitle>
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
