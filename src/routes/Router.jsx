import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import HomePage from "../pages/HomePage";
import AllProduct from "../pages/AllProduct";
import PrivateRoute from "./PrivateRoute";
import Contact from "../pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/all-products",
        element: (
          <PrivateRoute>
            <AllProduct />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
    ],
  },
]);
