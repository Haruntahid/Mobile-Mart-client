import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function Layout() {
  return (
    <>
      <Navbar />
      {/* contents */}
      <div className="min-h-[calc(100vh-306px)]">
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
