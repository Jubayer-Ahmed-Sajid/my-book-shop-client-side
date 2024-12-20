import { StrictMode } from 'react'
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom';
import routes from './Routes/Routes.jsx';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
