import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../Components/Dashboard/Sidebar';

const Dashboard = () => {
    return (
        <div className='grid grid-cols-12 gap-2'>
           <div className='col-span-2 bg-base-200 border-r-2 border-r-black'>
            <Sidebar></Sidebar>
           </div>
           <div className='col-span-10'>

            <Outlet></Outlet>
           </div>
        </div>
    );
};

export default Dashboard;