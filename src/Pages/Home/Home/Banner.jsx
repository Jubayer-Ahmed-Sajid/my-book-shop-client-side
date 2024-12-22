import React from "react";
import banner from '../../../assets/2149241046-min.jpg'
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:`url(${banner})`
         
      }}
    >
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Welcome to the book shop</h1>
          <p className="mb-5">
           – your gateway to endless adventures, heartfelt stories, and boundless knowledge. Explore our collection and let the magic of books inspire your next journey!"
          </p>
          <Link to="/books" className="btn btn-primary">Get Started</Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
