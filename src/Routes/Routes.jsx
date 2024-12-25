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
import PrivateRoute from "./PrivateRoutes/PrivateRoute";
import SellerRoute from "./PrivateRoutes/SellerRoute";
import AdminRoutes from "./PrivateRoutes/AdminRoutes";
import AllUsers from "../Pages/Dashboard/Admin/All-Users/AllUsers";
import AllBooks from "../Pages/Dashboard/Admin/All-Books/AllBooks";
import Wishlist from "../Pages/Dashboard/Buyer/Wishlist/Wishlist";
import Cart from "../Pages/Dashboard/Buyer/Cart/Cart";
import Category from "../Components/Category";
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
        path:"categories/:category",
        element:<Category></Category>

      },
      {
        path: "/book/:id",
        element: <BookDetails></BookDetails>,
      },
    ],
  },
  {
    path: "/dashboard",
    element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute> ,
    children: [
      {
        path: "/dashboard/overview",
        element: <Overview></Overview>,
      },
      {
        path: "/dashboard/add-books",
        element:<SellerRoute><AddBooks></AddBooks></SellerRoute> ,
      },
      {
        path:'/dashboard/my-books',
        element:<SellerRoute><MyBooks></MyBooks> </SellerRoute> 
      },
      {
        path:'/dashboard/update/:id',
        element:<SellerRoute><UpdateBooks></UpdateBooks> </SellerRoute>
      },
      {
        path: "/dashboard/all-books",
        element:<AdminRoutes><AllBooks></AllBooks> </AdminRoutes>
      },
      {
        path: "/dashboard/all-users",
        element:<AdminRoutes><AllUsers></AllUsers></AdminRoutes>
      },
      {
        path: "/dashboard/wishlist",
        element:<Wishlist></Wishlist>
      
      },
      
      {
        path: "/dashboard/cart",
        element:<Cart></Cart>  

      }
    ],
  },
]);
export default routes;
