import React, { useEffect, useState } from "react";
import userAllBooks from "../../Hooks/useAllBooks";
import SearchBar from "../../Components/SearchBar";
import SortBar from "../../Components/SortBar";
import FilterBar from "../../Components/FilterBar";
import axios from "axios";
import Book from "../../Components/Book";
import { Link } from "react-router-dom";
import Loading from "../../Components/Loading";
import { Helmet } from "react-helmet-async";
import PageTitle from "../../Components/PageTitle";

const Books = () => {
  const [search, setSearch] = useState("");
  const [sorts, setSorts] = useState("asc");
  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("");

  const { data, isLoading, isError, refetch } = userAllBooks({
    search,
    sorts,
    category,
    author,
  });

  if (isLoading) {
    return (
      <div className="text-accent_2 w-screen h-screen flex items-center justify-center">
        <Loading></Loading>
      </div>
    );
  }
  if(isError){
    return <div className="text-accent_2 w-screen h-screen flex items-center justify-center" >
      <h2>Something went wrong !!</h2> 
      <Link to="/" className="btn ml-4 btn-sm btn-warning">Back to Home</Link>
    </div>
  }
  const { books, authors, categories } = data?.data;

  const handleReset = () => {
    setSearch("");
    setAuthor("");
    setCategory("");
    setSorts("asc");
  };

  return (
    <div>
     <PageTitle title={"Books"}></PageTitle>
      <div className="lg:flex justify-between mx-2">
        <SearchBar setSearch={setSearch}></SearchBar>
        <SortBar setSorts={setSorts}></SortBar>
      </div>

      <div className="lg:grid grid-cols-12 gap-2">
        {/* Side bar */}
        <div className="col-span-2 py-6 bg-base-300 rounded-md border-r-2 min-h-screen">
          <FilterBar
            setAuthor={setAuthor}
            authors={authors}
            setCategory={setCategory}
            categories={categories}
          ></FilterBar>
          <button className="btn w-full btn-primary" onClick={handleReset}>
            Reset
          </button>
        </div>
        {/* books */}

        <div className="col-span-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {books?.length === 0 ? (
              <h2 className=" font-bold text-2xl h-screen w-screen flex items-center justify-center text-red-600">
                No books found
              </h2>
            ) : (
              books?.map((book) => (
                <Link to={`/book/${book._id}`}>
                  <Book key={book?._id} book={book}></Book>
                </Link>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
