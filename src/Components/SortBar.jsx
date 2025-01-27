import React from "react";

const SortBar = ({setSorts}) => {
      const handleSort = (e) => {
        e.preventDefault();
        setSorts(e.target.value);
      };
  return (
    <div>
      <div className="p-8 ">
        <select
          onChange={handleSort}
          className="select select-bordered w-full max-w-xs"
        >
          <option disabled>
           Sort by Price
          </option>
          <option value="asc">Price Low to High</option>
          <option value="des">Price High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default SortBar;
