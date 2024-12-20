import React from "react";
import { Link } from "react-router-dom";

const DropDown = () => {
  return (
    <div className="dropdown">
      <div tabIndex={0} role="button"  className=" m-1">
        <div className="avatar">
          <div className=" w-12 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
      >
        <li>
         <Link>Dashboard</Link>
        </li>
        <li>
         <button className="btn-primary">Logout</button>
        </li>
      </ul>
    </div>
  );
};

export default DropDown;
