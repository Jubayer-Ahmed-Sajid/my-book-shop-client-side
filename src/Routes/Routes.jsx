import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout/MainLayout';
import Home from '../Pages/Home/Home';
import Books from '../Pages/Books/Books';
import AboutUs from '../Pages/About-us/AboutUs';
import ContactUs from '../Pages/ContactUs/ContactUs';
import Registration from '../Pages/Authentication/Registration';
import Login from '../Pages/Authentication/Login';
import Dashboard from '../Layouts/Dashboard/Dashboard';
import Overview from '../Pages/Dashboard/Overview/Overview';
import AddBooks from '../Pages/Dashboard/Overview/AddBooks/AddBooks';
 const routes = createBrowserRouter([
        {
          path: "/",
          element: <MainLayout></MainLayout>,
          children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'books',
                element:<Books></Books>
            },
            {
                path:'about-us',
                element:<AboutUs></AboutUs>
            },
            {
                path:'contact-us',
                element:<ContactUs></ContactUs>
            },
            {
                path:'registration',
                element:<Registration></Registration>
            },
            {
              path:'login',
              element:<Login></Login>
            }
          ],
          
        },
        {
          path:'/dashboard',
          element:<Dashboard></Dashboard>,
          children:[
            {
              path:'/dashboard/overview',
              element:<Overview></Overview>
            },
            {
              path:'/dashboard/add-books',
              element:<AddBooks></AddBooks>
            }
          ]
        }
      ]);
export default routes

