import React from "react";

const SearchBar = ({setSearch}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        
      
        setSearch(e.target.search.value);
     
      };
  return (
    <div>
      <form onSubmit={handleSubmit} className="p-8 flex">
        <label className="border-2 rounded-l-md p-2 rounded-r-none flex items-center gap-2">
          <input
            type="text"
            className="grow focus:outline-none"
            name="search"
            placeholder="Search"
          />
        </label>
        <button
          className="btn rounded-r-md rounded-l-none py-4 btn-primary"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
