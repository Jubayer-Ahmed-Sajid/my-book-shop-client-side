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
import { GrOverview } from "react-icons/gr";

const Sidebar = () => {
  const { logout } = UseAuth();
  const { data, isLoading, isError } = useUserDetails();
  if (isLoading) {
    return <Loading />;
  }

  const role = data?.data?.role;
  const isAdmin = data?.data?.isAdmin;
  console.log(isAdmin);

  let options = [
    { name: "Home", path: "/", icon: <IoHomeOutline /> },
    { name: "Overview", path: "/dashboard/overview", icon: <GrOverview  /> },
  ];
  if (isAdmin) {
    options = [
      ...options,
      {
        name: "All Users",
        path: "/dashboard/all-users",
        icon: <LuUsersRound />,
      },
      {
        name:"All Books",
        path:"/dashboard/all-books",
        icon:<GiBookshelf />
      }
    ];
  }
 else if (role === "seller") {
    options = [
      ...options,
      { name: "My Books", path: "/dashboard/my-books", icon: <GiBookshelf /> },
      {
        name: "Add Book",
        path: "/dashboard/add-book",
        icon: <IoAddCircleOutline />,
      },
    ];
  }

else  if (role === "buyer") {
    options = [
      ...options,
      { name: "Cart", path: "/dashboard/cart", icon: <TiShoppingCart /> },
      { name: "Wishlist", path: "/dashboard/wishlist", icon: <FaRegHeart /> },
    ];
  }

 

  return (
    <div className="bg-primary text-white min-h-screen p-4">
      <div className="flex flex-col items-center mb-6">
        <img
          src={data?.data?.photoURL}
          alt="User"
          className="w-24 h-24 rounded-full border-4 border-white mb-4"
        />
        <h2 className="text-xl font-bold">{data?.data?.fullName}</h2>
        <p className="text-sm">{data?.data?.email}</p>
      </div>
      <nav className="flex flex-col space-y-4">
        {options.map((option) => (
          <NavLink
            key={option.name}
            to={option.path}
            className="flex items-center p-3 rounded-lg hover:bg-indigo-700 transition-colors"
            activeClassName="bg-indigo-700"
          >
            <span className="text-2xl mr-3">{option.icon}</span>
            <span>{option.name}</span>
          </NavLink>
        ))}
      </nav>
      <button
        onClick={logout}
        className="flex items-center p-3 mt-6 rounded-lg bg-red-600 hover:bg-red-700 transition-colors w-full"
      >
        <MdLogout className="text-2xl mr-3" />
        <span>Logout</span>
      </button>
    </div>
  );
};

export default Sidebar;
