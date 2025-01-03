import React from "react";
import { Link } from "react-router-dom";
import useUserDetails from "../../../Hooks/useUserDetails";
import UseAuth from "../../../Hooks/UseAuth";
import { MdLogout, MdOutlineDashboardCustomize } from "react-icons/md";
import Loading from "../../Loading";

const DropDown = () => {
  const {data,isLoading} = useUserDetails()
  if(isLoading){
    return <div className="12">Loading... </div>
  }
 
  const {logout} = UseAuth()

  return (
    <div className="dropdown dropdown-bottom dropdown-left dropdown-content">
      <div tabIndex={0} role="button"  className=" m-1">
        <div className="avatar">
          <div className=" w-12 rounded-full">
            <img src={data?.data?.photoURL
} />
          </div>
        </div>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-white rounded-box z-[1] w-52 p-2 shadow"
      >
        <li>
         <Link className="btn flex items-center border-none hover:bg-accent/80 gap-3 bg-accent text-white" to="/dashboard/overview">
         <MdOutlineDashboardCustomize className="text-2xl" />
         Dashboard</Link>
        </li>
        <li>
         <button onClick={()=> logout()} className="bg-error flex items-center gap-3 hover:bg-error/80 text-white border-none btn btn-md my-2">  <MdLogout className="text-2xl" />Logout</button>
        </li>
      </ul>
    </div>
  );
};

export default DropDown;
