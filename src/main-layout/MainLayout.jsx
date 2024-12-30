import { Outlet } from "react-router-dom";
import Footer from "../shared-components/Footer";
import Navbar from "../shared-components/Navbar";

const MainLayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
