import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../main-layout/MainLayout";
import Home from "../pages/home/Home";
import Menu from "../pages/menu/Menu";
import ShopsPage from "../pages/our shops/ShopsPage";

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
]);

export default router;
