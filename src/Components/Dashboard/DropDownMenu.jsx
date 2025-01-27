import React from "react";
import Loading from "../Loading";
import useUserDetails from "../../Hooks/useUserDetails";
import { LuUsersRound } from "react-icons/lu";
import { GiBookshelf } from "react-icons/gi";
import { IoAddCircleOutline, IoHomeOutline } from "react-icons/io5";
import { TiShoppingCart } from "react-icons/ti";
import { FaRegHeart } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { GrOverview } from "react-icons/gr";
import useAuth from "../../Hooks/useAuth";

const DropDownMenu = () => {
  const { logout } = useAuth();
  const { data, isLoading, isError } = useUserDetails();
  if (isLoading) {
    return <Loading />;
  }

  const role = data?.data?.role;
  const isAdmin = data?.data?.isAdmin;
  // console.log(isAdmin);

  let options = [
    { name: "Home", path: "/", icon: <IoHomeOutline /> },
    { name: "Overview", path: "/dashboard/overview", icon: <GrOverview /> },
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
        name: "All Books",
        path: "/dashboard/all-books",
        icon: <GiBookshelf />,
      },
    ];
  } else if (role === "seller") {
    options = [
      ...options,
      { name: "My Books", path: "/dashboard/my-books", icon: <GiBookshelf /> },
      {
        name: "Add Book",
        path: "/dashboard/add-book",
        icon: <IoAddCircleOutline />,
      },
    ];
  } else if (role === "buyer") {
    options = [
      ...options,
      { name: "Cart", path: "/dashboard/cart", icon: <TiShoppingCart /> },
      { name: "Wishlist", path: "/dashboard/wishlist", icon: <FaRegHeart /> },
    ];
  }

  return (
    <div className="flex justify-between items-center mx-4 w-full">
      <Link className="text-primary font-semibold" to="/">
        Books Corner
      </Link>
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className=" m-1">
          <img
            src={data?.data?.photoURL}
            alt="User"
            className="w-12 h-12 rounded-full border-4 border-white"
          />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content mx-4 menu w-64  bg-primary text-white rounded-box z-[1]  p-2 shadow"
        >
          <nav className="flex flex-col space-y-4">
            {options.map((option) => (
              <NavLink
                key={option.name}
                to={option.path}
                className="flex items-center p-3 rounded-lg hover:bg-primary/80 transition-colors"
                activeClassName="bg-indigo-700"
              >
                <span className="text-2xl mr-3">{option.icon}</span>
                <span>{option.name}</span>
              </NavLink>
            ))}
          </nav>
          <button
            onClick={logout}
            className="flex items-center p-3 mt-6 rounded-lg bg-red-600 hover:bg-error/80 transition-colors w-full"
          >
            <MdLogout className="text-2xl mr-3" />
            <span>Logout</span>
          </button>
        </ul>
      </div>
    </div>
  );
};

export default DropDownMenu;
