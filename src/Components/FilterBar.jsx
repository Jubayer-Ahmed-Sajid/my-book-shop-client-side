import React from "react";
import { MdOutlineFilterAlt } from "react-icons/md";

const FilterBar = ({ setAuthor, authors, setCategory, categories, selectedAuthor, selectedCategory }) => {
  const handleAuthor = (e) => {
    e.preventDefault();
    setAuthor(e.target.value);
  };

  const handleCategory = (e) => {
    e.preventDefault();
    setCategory(e.target.value);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md mx-auto">
      <div className="flex items-center font-semibold mb-4">
        <MdOutlineFilterAlt className="text-2xl text-primary mr-2" />
        <h2 className="text-xl text-primary">Filters</h2>
      </div>

      <div className="flex flex-col gap-4">
        <select
          onChange={handleCategory}
          value={selectedCategory}
          className="select select-bordered w-full max-w-xs bg-gray-100 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option disabled selected>
            Categories
          </option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <select
          onChange={handleAuthor}
          value={selectedAuthor}
          className="select select-bordered w-full max-w-xs bg-gray-100 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option disabled selected>
            Authors
          </option>
          {authors.map((author) => (
            <option key={author} value={author}>
              {author}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterBar;
