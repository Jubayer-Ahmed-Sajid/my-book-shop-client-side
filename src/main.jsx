import { StrictMode } from "react";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import routes from "./Routes/Routes.jsx";
import AuthProvider from "./Components/AuthProvider/AuthProvider .jsx";
import { Toaster } from "sonner";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <Toaster richColors></Toaster>
      <RouterProvider router={routes} />
    </AuthProvider>
  </React.StrictMode>
);
