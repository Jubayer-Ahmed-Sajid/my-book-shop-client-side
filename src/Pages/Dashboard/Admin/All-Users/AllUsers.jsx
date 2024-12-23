import React from 'react';
import UseAllUsers from '../../../../Hooks/UseAllUsers';
import BasicTable from '../../../../Components/BasicTable';
import { FaTrashAlt } from 'react-icons/fa';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import Loading from '../../../../Components/Loading';

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { data, isLoading, isError, refetch } = UseAllUsers();
    console.log(data);

    // Function to handle deleting a user
    const handleDelete = async (user) => {
        try {
            const res = await axiosSecure.delete(`/user/delete/${user.email}`);
            console.log(res.data);
            refetch();
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    };

    // Function to handle admin status
    const handleAdmin = async (user) => {
        try {
            const res = await axiosSecure.patch(`/user/update/${user.email}`,{isAdmin:true});
            console.log(res.data);
            refetch();
        } catch (error) {
            
        }
    };

    // Function to handle approving a seller
    const handleApproveUser = async (user) => {
        try {
            const res = await axiosSecure.patch(`/seller/approve/${user.email}`,{status:"approved"});
            console.log(res.data);
            refetch();
        } catch (error) {
            console.error("Error approving user:", error);
        }
    };

    // Define columns for the user table
    const columns = [
        {
            header: 'Email',
            accessorKey: 'email',
        },
        {
            header: 'Admin',
            accessorKey: 'isAdmin',
            cell: ({ row }) => (
                <button  disabled={row.original.isAdmin} onClick={() => handleAdmin(row.original)}>
                    {row.original.isAdmin ? 'Admin' : 'Make Admin'}
                </button>
            ),
        },
        {
            header: 'Photo',
            accessorKey: 'photoURL',
            cell: ({ row }) => (
                <img src={row.original.photoURL} alt="User" width={50} />
            ),
        },
        {
            header: 'Role',
            accessorKey: 'role',
        },
        {
            header: 'Status',
            accessorKey: 'status',
            cell: ({ row }) => (
                <div>
                    {row.original.status === 'approved' && (
                        
                     <p> {row.original.status}</p>   
                           
                       
                    )}
                    {row.original.status === 'pending' && (
                        <button onClick={() => handleApproveUser(row.original)}>
                            Approve
                        </button>
                    )}
                </div>
            ),
        },
        {
            header: 'Delete',
            accessorKey: 'delete',
            cell: ({ row }) => (
                <button onClick={() => handleDelete(row.original)}>
                    <FaTrashAlt className="text-red-600 text-xl" />
                </button>
            ),
        },
    ];

    if (isLoading) {
        return <div><Loading></Loading></div>;
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