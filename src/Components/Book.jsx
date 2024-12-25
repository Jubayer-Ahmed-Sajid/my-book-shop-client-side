import React from "react";

const Book = ({ book }) => {
  const { title, author, category, price, stock, image } = book;

  return (
    <div className="bg-white flex flex-col justify-between shadow-lg lg:h-[460px] rounded-lg overflow-hidden transform transition-transform hover:scale-105 duration-300">
      <img src={image} className="h-48 object-cover w-full" alt={title} />
      <div className="p-6">
        <h2 className="text-2xl font-bold text-primary mb-2">{title}</h2>
        <p className="text-lg font-semibold text-secondary">{author}</p>
        <p className="text-md text-gray-500 mb-4">{category}</p>
        <div className="flex justify-between items-center">
          <p className="text-lg font-semibold text-primary">
            Price: <span className="text-accent_1">${price}</span>
          </p>
          <p className="text-lg font-semibold text-primary">
            Stock: <span className="text-accent_2">{stock}</span>
          </p>
        </div>
        <button className="mt-4 w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Book;
