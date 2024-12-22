import React from "react";
import UseAuth from "../../../../../Hooks/UseAuth";
import useSellerBooks from "../../../../../Hooks/useSellerBooks";
import Loading from "../../../../../Components/Loading";
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import BasicTable from "../../../../../Components/BasicTable";
import { Link } from "react-router-dom";

const MyBooks = () => {
  const { user } = UseAuth();
  const email = user?.email;
  const { data, isLoading, isError, refetch } = useSellerBooks({ email });
  if (isLoading) {
    return (
      <div>
        <Loading></Loading>
      </div>
    );
  }

  const columns = [
    {
        header: 'Title',
        accessorKey: 'title',
    },
    {
        header: 'Author',
        accessorKey: 'author',
    },
    {
        header: 'Category',
        accessorKey: 'category',
    },
    {
        header: 'Email',
        accessorKey: 'email',
    },
    {
        header: 'Image',
        accessorKey: 'image',
        cell: ({ row }) => (
            <img src={row.original.image} alt={row.original.title} width={70} />
        ),
    },
    {
        header: 'Price',
        accessorKey: 'price',
    },
    {
        header: 'Stock',
        accessorKey: 'stock',
    },
    {
        header: 'Update',
        accessorKey: 'update',
        cell: ({ row }) => (
            <button onClick={() => handleUpdate(row.original)}>
               <Link to={`/dashboard/update/${row.original._id}`}><FaEdit /></Link> 
            </button>
        ),
    },
    {
        header: 'Delete',
        accessorKey: 'delete',
        cell: ({ row }) => (
            <button onClick={() => handleDelete(row.original)}>
                <FaTrashAlt />
            </button>
        ),
    },
];
const handleUpdate = (book) => {
    console.log(book);
}
const handleDelete = (data) => {
   
}
  return <div>
    <BasicTable data={data?.data} columns={columns} />
  </div>;
};

export default MyBooks;
