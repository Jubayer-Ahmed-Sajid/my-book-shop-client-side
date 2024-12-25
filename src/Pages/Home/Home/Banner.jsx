import React from "react";
import banner from '../../../assets/2149241046-min.jpg';
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="hero-overlay bg-black mt-[78px] bg-opacity-50 absolute inset-0"></div>
      <div className="relative z-10 text-white text-center p-6 rounded-lg bg-opacity-70 bg-primary max-w-lg mx-auto">
        <h1 className="mb-5 text-5xl font-bold">Welcome to the Book Shop</h1>
        <p className="mb-5 text-lg">
          Your gateway to endless adventures, heartfelt stories, and boundless knowledge. Explore our collection and let the magic of books inspire your next journey!
        </p>
        <Link to="/books" className="btn border-none text-xl bg-accent_1 text-white py-2 px-4 rounded-lg hover:bg-accent_2 transition-colors">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Banner;
