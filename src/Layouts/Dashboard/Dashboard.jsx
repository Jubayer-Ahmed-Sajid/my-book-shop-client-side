import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../Components/Dashboard/Sidebar";
import PageTitle from "../../Components/PageTitle";

const Dashboard = () => {
  return (
    <div className="lg:grid grid-cols-12 gap-2">
      <PageTitle title={"Dashboard"}></PageTitle>
      <div className="col-span-2 bg-base-200 lg:border-r-2">
        <Sidebar></Sidebar>
      </div>
      <div className="lg:col-span-10">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
