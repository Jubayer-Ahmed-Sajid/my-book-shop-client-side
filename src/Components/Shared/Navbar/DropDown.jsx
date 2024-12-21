import React from "react";
import { Link } from "react-router-dom";
import useUserDetails from "../../../Hooks/useUserDetails";
import UseAuth from "../../../Hooks/UseAuth";

const DropDown = () => {
  const {data} = useUserDetails()
  const {logout} = UseAuth()

  return (
    <div className="dropdown dropdown-bottom dropdown-left dropdown-content">
      <div tabIndex={0} role="button"  className=" m-1">
        <div className="avatar">
          <div className=" w-12 rounded-full">
            <img src={data?.data?.photoURL} />
          </div>
        </div>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
      >
        <li>
         <Link to="/dashboard/overview">Dashboard</Link>
        </li>
        <li>
         <button onClick={()=> logout()} className="btn-primary">Logout</button>
        </li>
      </ul>
    </div>
  );
};

export default DropDown;
