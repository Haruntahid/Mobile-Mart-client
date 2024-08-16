import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Layout() {
  return (
    <>
      <Navbar />
      {/* contents */}
      <div className="min-h-[calc(100vh-172px)]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Layout;
