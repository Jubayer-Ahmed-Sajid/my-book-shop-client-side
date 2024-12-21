import React from "react";
import { MdOutlineFilterAlt } from "react-icons/md";

const FilterBar = ({setAuthor,authors,setCategory,categories}) => {
    const handleAuthor=(e)=>{
        e.preventDefault()
        setAuthor(e.target.value)

    }
    const handleCategory=(e)=>{
        e.preventDefault()
        setCategory(e.target.value)
    }
  return (
   
      <div >
        <div className="flex font-semibold items-center">
          <MdOutlineFilterAlt className="text-2xl text-center" />
          <h2 className="">Filters</h2>
        </div>

        <div className="flex flex-col py-4 w-full gap-2">
          <select onChange={handleCategory} className="select select-bordered w-full max-w-xs">
            <option disabled selected>
              Categories
            </option>
            {
                categories.map((category)=>(
                    <option value={category}> {category}</option>
                ))
            }
          </select>

          <select onChange={handleAuthor} className="select select-bordered w-full max-w-xs">
            <option disabled selected>
             Authors
            </option>
           {
           authors.map((author)=>(
                <option value={author}>
                    {author}
                </option>
            ))
           }
          </select>
        </div>
      </div>
  
  );
};

export default FilterBar;
