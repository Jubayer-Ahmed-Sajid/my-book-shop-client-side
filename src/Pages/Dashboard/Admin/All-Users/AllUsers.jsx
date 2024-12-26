import React from "react";
import UseAllUsers from "../../../../Hooks/UseAllUsers";
import BasicTable from "../../../../Components/BasicTable";
import { FaTrashAlt } from "react-icons/fa";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Loading from "../../../../Components/Loading";
import Swal from 'sweetalert2'
import PageTitle from "../../../../Components/PageTitle";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data, isLoading, isError, refetch } = UseAllUsers();
  console.log(data);

  // Function to handle deleting a user
  const handleDelete = async (user) => {
    try {
      Swal.fire({
        title: "Are you sure You want to Delete?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const res = await axiosSecure.delete(`/user/delete/${user.email}`);
          console.log(res.data);
          refetch();

          Swal.fire({
            title: "Deleted!",
            text: "User has been deleted.",
            icon: "success",
          });
        }
      });
    } catch (error) {
      swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  // Function to handle admin status
  const handleAdmin = async (user) => {
    try {
      Swal.fire({
        title: "Are you sure want to make admin?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(async(result) => {
        if (result.isConfirmed) {
          const res = await axiosSecure.patch(`/user/update/${user.email}`, {
            isAdmin: true,
          });
          console.log(res.data);
          refetch();
          Swal.fire({
            title: "Status Changed!",
            text: "User is now an Admin.",
            icon: "success"
          });
        }
      });


     
    } catch (error) {
     
      swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  // Function to handle approving a seller
  const handleApproveUser = async (user) => {
    try {
      Swal.fire({
        title: "Are you want to approve?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(async(result) => {
        if (result.isConfirmed) {

          const res = await axiosSecure.patch(`/seller/approve/${user.email}`, {
            status: "approved",
          });
          console.log(res.data);
          refetch();
          Swal.fire({
            title: "Approved!",
            text: "User is now a seller",
            icon: "success"
          });
        }
      });
     
    } catch (error) {
      swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  // Define columns for the user table
  const columns = [
    {
      header: "Email",
      accessorKey: "email",
    },
    {
      header: "Admin",
      accessorKey: "isAdmin",
      cell: ({ row }) => (
        <button
          disabled={row.original.isAdmin}
          onClick={() => handleAdmin(row.original)}
        >
          {row.original.isAdmin ? "Admin" : "Make Admin"}
        </button>
      ),
    },
    {
      header: "Photo",
      accessorKey: "photoURL",
      cell: ({ row }) => (
        <img src={row.original.photoURL} alt="User" width={50} />
      ),
    },
    {
      header: "Role",
      accessorKey: "role",
    },
    {
      header: "Status",
      accessorKey: "status",
      cell: ({ row }) => (
        <div>
                <PageTitle title={"All Users"}></PageTitle>

          {row.original.status === "approved" && <p> {row.original.status}</p>}
          {row.original.status === "pending" && (
            <button onClick={() => handleApproveUser(row.original)}>
              Approve
            </button>
          )}
        </div>
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

  if (isLoading) {
    return (
      <div>
        <Loading></Loading>
      </div>
    );
  }

  if (isError) {
    return <div>Error loading users</div>;
  }

  return (
    <div>
      <BasicTable data={data?.data} columns={columns} />
    </div>
  );
};

export default AllUsers;
