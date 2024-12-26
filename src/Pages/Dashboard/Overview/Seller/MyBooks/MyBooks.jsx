import React from "react";
import UseAuth from "../../../../../Hooks/UseAuth";
import useSellerBooks from "../../../../../Hooks/useSellerBooks";
import Loading from "../../../../../Components/Loading";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import BasicTable from "../../../../../Components/BasicTable";
import { Link } from "react-router-dom";
import axios from "axios";
import useAxiosSecure from "../../../../../Hooks/useAxiosSecure";
import PageTitle from "../../../../../Components/PageTitle";

const MyBooks = () => {
  const { user } = UseAuth();
  const email = user?.email;
  const { data, isLoading, isError, refetch } = useSellerBooks({ email });
  console.log(data);
  const axiosSecure = useAxiosSecure();
  if (isLoading) {
    return (
      <div>
        <Loading></Loading>
      </div>
    );
  }

  const columns = [
    {
      header: "Title",
      accessorKey: "title",
    },
    {
      header: "Author",
      accessorKey: "author",
    },
    {
      header: "Category",
      accessorKey: "category",
    },
    {
      header: "Email",
      accessorKey: "email",
    },
    {
      header: "Image",
      accessorKey: "image",
      cell: ({ row }) => (
        <img src={row.original.image} alt={row.original.title} width={70} />
      ),
    },
    {
      header: "Price",
      accessorKey: "price",
    },
    {
      header: "Stock",
      accessorKey: "stock",
    },
    {
      header: "Update",
      accessorKey: "update",
      cell: ({ row }) => (
        <Link
          to={`/dashboard/update/${row.original._id}`}
          state={{ state: row.original }}
        >
          <FaEdit className="text-center text-yellow-600 text-xl w-full" />
        </Link>
      ),
    },
    {
      header: "Delete",
      accessorKey: "delete",
      cell: ({ row }) => (
        <button onClick={() => handleDelete(row.original)}>
          <FaTrashAlt className="text-red-600 text-xl" />
        </button>
      ),
    },
  ];

  const handleDelete = async (book) => {
    try {
      const res = await axiosSecure.delete(`/book/delete/${book._id}`);
      console.log(res.data);
      refetch();
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };
  return (
    <div>
      <PageTitle title={"My Books"}></PageTitle>
      <BasicTable data={data?.data} columns={columns} />
    </div>
  );
};

export default MyBooks;
