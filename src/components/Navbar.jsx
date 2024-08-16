import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function Navbar() {
  const { logOut, user } = useAuth();
  console.log(user);
  return (
    <>
      <div className="navbar bg-[#28231D] py-5 px-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>All Products</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
          <Link
            to={"/"}
            className="text-4xl font-semibold px-5 text-white flex items-center gap-3"
          >
            <img
              src="https://i.ibb.co/RhR7Vt9/user-interface.png"
              alt=""
              className="w-12 h-12"
            />
            Mobile Mart
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white text-xl space-x-5">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/all-products"}>All Products</Link>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
        {user ? (
          <>
            <div className="navbar-end">
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-16 rounded-full border-[1px] border-white">
                    <img
                      alt="Profile-Pic"
                      src={user.photoURL}
                      className="object-cover w-16"
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[10] mt-3 w-52 p-2 shadow"
                >
                  <li onClick={() => logOut()}>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="navbar-end">
              <Link
                to={"/login"}
                className="text-white text-xl px-8 border-[2px] py-1 rounded-2xl"
              >
                Login
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Navbar;
