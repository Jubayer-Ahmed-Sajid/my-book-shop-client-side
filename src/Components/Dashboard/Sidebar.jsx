import React from "react";
import { NavLink } from "react-router-dom";
import useUserDetails from "../../Hooks/useUserDetails";
import { GiBookshelf } from "react-icons/gi";
import { LuUsersRound } from "react-icons/lu";
import { TiShoppingCart } from "react-icons/ti";
import { FaRegHeart } from "react-icons/fa";
import { IoAddCircleOutline, IoHomeOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import Loading from "../Loading";
import UseAuth from "../../Hooks/UseAuth";

const Sidebar = () => {
 
     const { data,isLoading,isError } = useUserDetails();
     if(isLoading){
         return <Loading></Loading>
       }
 
  const role = data?.data?.role;
  const isAdmin = data?.data?.isAdmin;
  console.log(isAdmin);
  let options;

  // Determining which options to render
  if (isAdmin) {
    options = (
      <>
        <li>
          <NavLink
            to="/dashboard/all-users"
            className={({ isActive }) =>
              `my-2 p-2 w-full rounded-md flex items-center gap-2 ${
                isActive
                  ? "bg-primary text-white"
                  : "bg-blue-700 text-gray-100 hover:bg-primary hover:text-white transition"
              }`
            }
          >
            <LuUsersRound className="text-2xl" />
            All Users
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/all-books"
            className={({ isActive }) =>
              `my-2 p-2 w-full rounded-md flex items-center gap-2 ${
                isActive
                  ? "bg-primary text-white"
                  : "bg-blue-700 text-gray-100 hover:bg-primary hover:text-white transition"
              }`
            }
          >
            <GiBookshelf className="text-2xl" />
            All Books
          </NavLink>
        </li>
      </>
    );
  }

 else if (role === "buyer") {
    options = (
      <>
        <li>
          <NavLink
            to="/dashboard/cart"
            className={({ isActive }) =>
              `my-2 p-2 w-full rounded-md flex items-center gap-2 ${
                isActive
                  ? "bg-primary text-white"
                  : "bg-blue-700 text-gray-100 hover:bg-primary hover:text-white transition"
              }`
            }
          >
            <TiShoppingCart className="text-2xl" />
            My Cart
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/wishlist"
            className={({ isActive }) =>
              `my-2 p-2 w-full rounded-md flex items-center gap-2 ${
                isActive
                  ? "bg-primary text-white"
                  : "bg-blue-700 text-gray-100 hover:bg-primary hover:text-white transition"
              }`
            }
          >
            <FaRegHeart className="text-2xl" />
            My Wishlist
          </NavLink>
        </li>
      </>
    );
  } else if (role === "seller") {
    options = (
      <>
        <li>
          <NavLink
            to="/dashboard/add-books"
            className={({ isActive }) =>
              `my-2 p-2 w-full rounded-md flex items-center gap-2 ${
                isActive
                  ? "bg-primary text-white"
                  : "bg-blue-700 text-gray-100 hover:bg-primary hover:text-white transition"
              }`
            }
          >
            <IoAddCircleOutline className="text-2xl" />
            Add Books
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/my-books"
            className={({ isActive }) =>
              `my-2 p-2 w-full rounded-md flex items-center gap-2 ${
                isActive
                  ? "bg-primary text-white"
                  : "bg-blue-700 text-gray-100 hover:bg-primary hover:text-white transition"
              }`
            }
          >
            <GiBookshelf className="text-2xl" />
            My Books
          </NavLink>
        </li>
      </>
    );
  } 
  return (
    <div className="h-full min-h-screen p-4">
      <ul>
        <h2 className="text-primary text-xl font-bold py-8">My book Shop</h2>
        {options}
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `my-2 p-2 w-full rounded-md flex items-center gap-2 ${
                isActive
                  ? "bg-primary text-white"
                  : "bg-blue-700 text-gray-100 hover:bg-primary hover:text-white transition"
              }`
            }
          >
            <IoHomeOutline className=" text-2xl" />
            Home
          </NavLink>
        </li>

        <li>
          <button className="my-2 bg-blue-700 text-base-100 p-2 w-full rounded-md flex items-center gap-2">
            <MdLogout className="text-2xl" />
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
