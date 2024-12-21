import React, { useEffect, useState } from "react";
import userAllBooks from "../../Hooks/userAllBooks";
import SearchBar from "../../Components/SearchBar";
import SortBar from "../../Components/SortBar";
import FilterBar from "../../Components/FilterBar";
import axios from "axios";
import Book from "../../Components/Book";

const Books = () => {
  const { data } = userAllBooks();

  const [search, setSearch] = useState("");
  const [sorts, setSorts] = useState("asc");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [author, setAuthor] = useState("");
  const [authors, setAuthors] = useState([]);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const res = async () => {
      const bookRes = await axios.get(
        `http://localhost:5000/all-books?title=${search}&sorts=${sorts}&category=${category}&author=${author}`
      );
      setBooks(bookRes?.data?.books);
      setAuthors(bookRes?.data?.authors);
      setCategories(bookRes?.data?.categories);
    };
    res();
  }, [search, sorts, category, author]);

  const handleReset = () => {
    setSearch("");
    setAuthor("");
    setCategory("");
    setSorts("asc");
  };
  console.log(books)
  return (
    <div>
      <div className="flex justify-between mx-6">
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
            {books.length === 0 ? (
              <h2>No books found</h2>
            ) : (
              books?.map((book) => (
                <Book key={book._id} book={book}></Book>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
