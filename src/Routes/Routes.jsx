import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Books from "../Pages/Books/Books";
import AboutUs from "../Pages/About-us/AboutUs";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Registration from "../Pages/Authentication/Registration";
import Login from "../Pages/Authentication/Login";
import Dashboard from "../Layouts/Dashboard/Dashboard";
import Overview from "../Pages/Dashboard/Overview/Overview";
import AddBooks from "../Pages/Dashboard/Overview/Seller/AddBooks/AddBooks";
import BookDetails from "../Components/BookDetails";
import MyBooks from "../Pages/Dashboard/Overview/Seller/MyBooks/MyBooks";
import UpdateBooks from "../Pages/Dashboard/Overview/Seller/MyBooks/UpdateBooks";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "books",
        element: <Books></Books>,
      },
      {
        path: "about-us",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "contact-us",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "registration",
        element: <Registration></Registration>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "/book/:id",
        element: <BookDetails></BookDetails>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/dashboard/overview",
        element: <Overview></Overview>,
      },
      {
        path: "/dashboard/add-books",
        element: <AddBooks></AddBooks>,
      },
      {
        path:'/dashboard/my-books',
        element:<MyBooks></MyBooks>
      },
      {
        path:'/dashboard/update/:id',
        element:<UpdateBooks></UpdateBooks>
      }
    ],
  },
]);
export default routes;
