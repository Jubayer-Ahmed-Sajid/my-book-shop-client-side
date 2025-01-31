import React, { useEffect, useState } from "react";
import Book from "../../../Components/Book";
import { Link } from "react-router-dom";
import useFeaturedBooks from "../../../Hooks/useFeaturedBooks";

const Featured = () => {
const {data,isError,isLoading} = useFeaturedBooks();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading featured books</div>;
  }
const books = data?.data;

  return (
    <div>
      <h2 className="text-center text-xl lg:text-3xl font-bold mt-12 text-primary">
       Featured Books
      </h2>
      <div className="divider w-1/3 mx-auto my-6 bg-accent h-1"></div>
      <div className="grid mt-6 lg:grid-cols-4 gap-4">
        {books?.map((book) => (
          <Link key={book._id} to={`/book/${book._id}`}>
            <Book key={book._id} book={book}></Book>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Featured;
