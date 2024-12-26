import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../Components/Dashboard/Sidebar";
import PageTitle from "../../Components/PageTitle";
import DropDownMenu from "../../Components/Dashboard/DropDownMenu";

const Dashboard = () => {
  return (
    <div className="lg:grid grid-cols-12 gap-2">
      <PageTitle title={"Dashboard"}></PageTitle>
      <div className="col-span-2 hidden lg:block bg-base-200 lg:border-r-2">
        <Sidebar></Sidebar>
      </div>
      <div className="lg:hidden m-4 flex">
       
        <DropDownMenu></DropDownMenu>
      </div>
      <div className="lg:col-span-10">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
