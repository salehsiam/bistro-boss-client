import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../main-layout/MainLayout";
import Home from "../pages/home/Home";
import Menu from "../pages/menu/Menu";
import ShopsPage from "../pages/our shops/ShopsPage";
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "menu",
        element: <Menu></Menu>,
      },
      {
        path: "our-shops/:category",
        element: <ShopsPage></ShopsPage>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/signUp",
    element: <SignUp></SignUp>,
  },
]);

export default router;
