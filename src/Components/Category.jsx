import React from "react";
import { Link, useParams } from "react-router-dom";
import useAllBooks from "../Hooks/useAllBooks";
import Loading from "./Loading";
import Book from "./Book";
import PageTitle from "./PageTitle";

const Category = () => {
  const { category } = useParams();
  const { data, isLoading, isError } = useAllBooks({
    search: "",
    sorts: "asc",
    category: category,
    author: "",
  });

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div>Error loading books</div>;
  }

  const books = data?.data?.books;

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <PageTitle title={"Category"}></PageTitle>
      <div className="mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl text-center font-bold text-primary mb-4 capitalize">
          {category} Books
        </h1>
        <div className="divider w-1/3 mx-auto my-6 bg-accent h-1"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {books?.length === 0 ? (
            <div className="flex h-screen w-screen items-center justify-center text-2xl text-primary">
              No books found
            </div>
          ) : (
            books.map((book) => (
              <Link to={`/book/${book._id}`} key={book.id}>
                <Book key={book.id} book={book} />
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Category;
