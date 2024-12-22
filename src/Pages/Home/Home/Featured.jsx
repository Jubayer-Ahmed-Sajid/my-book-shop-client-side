import axios from "axios";
import React, { useEffect, useState } from "react";
import Book from "../../../Components/Book";
import { Link } from "react-router-dom";

const Featured = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchFeaturedBooks = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/featured-books?count=4"
        );
        setBooks(response?.data);
      } catch (error) {
        console.error("Error fetching featured books:", error);
      }
    };

    fetchFeaturedBooks();
  }, []);
  console.log(books);
  return (
    <div>
      <h2 className="text-center text-xl text-bold mt-12 text-accent">
        Featured Books
      </h2>
      <div className="divider divider-accent w-1/3 mx-auto"></div>
      <div className="grid lg:grid-cols-4 gap-4">
        {books.map((book) => (
          <Link to={`/book/${book._id}`}>
            <Book key={book._id} book={book}></Book>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Featured;
