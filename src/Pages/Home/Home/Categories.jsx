import React from "react";
import { Link } from "react-router-dom";
import horrorImg from '../../../assets/rb_2092.png'
import scienceFictionImg from '../../../assets/2150793585.jpg'
import philosophyImg from '../../../assets/2148882597.jpg'

const Categories = () => {


  return (
    <div>
      <h2 className="text-center text-3xl font-bold mt-12 text-primary">
        Top Categories
      </h2>
      <div className="divider w-1/3 mx-auto my-6 bg-accent h-1"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto">
        <Link
          to='/categories/horror'
          
          className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 duration-300"
        >
          <img src={horrorImg } alt='horror' className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-bold text-primary">Horror</h3>
          </div>
        </Link>
        <Link
          to='/categories/science-fiction'
          className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 duration-300"
        >
          <img src={scienceFictionImg} alt='science-fiction' className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-bold text-primary">Science Fiction </h3>
          </div>
        </Link>
        <Link
          to='/categories/romance'
         
          className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 duration-300"
        >
          <img src="https://img.freepik.com/free-photo/flat-lay-wedding-card-roses-table_23-2148468541.jpg?uid=R119823725&ga=GA1.1.1124564091.1734164686&semt=ais_hybrid" alt="romance" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-bold text-primary">Romance</h3>
          </div>
        </Link>
        <Link
          to='/categories/philosophy'
        
          className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 duration-300"
        >
          <img src={philosophyImg} alt='philosophy' className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-bold text-primary">Philosophy</h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Categories;
