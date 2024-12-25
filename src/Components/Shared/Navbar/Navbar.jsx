import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import DropDown from "./DropDown";
import UseAuth from "../../../Hooks/UseAuth";
import Loading from "../../Loading";

const Navbar = () => {
  const { user, loading } = UseAuth();

  if (loading) {
    return <Loading></Loading>;
  }
  
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/books">Books</NavLink>
      </li>
      <li>
        <NavLink to="/about-us">About us</NavLink>
      </li>
      <li>
        <NavLink to="/contact-us">Contact us</NavLink>
      </li>
    </>
  );
  const navEnd = (
    <div>
      <NavLink className="btn px-[26px] btn-md btn-primary" to="/login">
        Login
      </NavLink>

      <NavLink className="btn btn-md btn-primary" to="/registration">
        Register
      </NavLink>
    </div>
  );
  return (
    <div className="navbar z-20 relative bg-white shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <a
          href="/"
          className="btn hidden lg:block btn-ghost text-2xl text-primary font-bold"
        >
          Books Corner
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu text-xl menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <DropDown></DropDown>
        ) : (
          <div className="flex gap-2">{navEnd}</div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
