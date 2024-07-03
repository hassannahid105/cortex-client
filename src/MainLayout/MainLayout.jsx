import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar/Navbar";
import Footer from "../component/Footer/Footer";
const MainLayout = () => {
  return (
    <div className="max-w-[1280px] mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
