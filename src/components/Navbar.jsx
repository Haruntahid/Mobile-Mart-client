// import { Link } from "react-router-dom";
// import useAuth from "../hooks/useAuth";

// function Navbar() {
//   const { logOut, user } = useAuth();
//   return (
//     <>
//       <div className="navbar bg-[#28231D] py-5 px-10">
//         <div className="navbar-start">
//           <Link
//             to={"/"}
//             className="text-xl lg:text-4xl font-semibold lg:px-5 text-white flex items-center gap-3"
//           >
//             <img
//               src="https://i.ibb.co/RhR7Vt9/user-interface.png"
//               alt=""
//               className="w-10 h-10 lg:w-12 lg:h-12"
//             />
//             Mobile Mart
//           </Link>
//         </div>
//         <div className="navbar-center hidden lg:flex">
//           <ul className="menu menu-horizontal px-1 text-white text-xl space-x-5">
//             <li>
//               <Link to={"/"}>Home</Link>
//             </li>
//             <li>
//               <Link to={"/all-products"}>All Products</Link>
//             </li>
//             <li>
//               <Link to={"/contact"}>Contact</Link>
//             </li>
//           </ul>
//         </div>
//         {user ? (
//           <>
//             <div className="navbar-end">
//               <div className="dropdown dropdown-end">
//                 <div
//                   tabIndex={0}
//                   role="button"
//                   className="btn btn-ghost btn-circle avatar"
//                 >
//                   <div className="w-16 rounded-full border-[1px] border-white">
//                     <img
//                       alt="Profile-Pic"
//                       src={user.photoURL}
//                       className="object-cover w-16"
//                     />
//                   </div>
//                 </div>
//                 <ul
//                   tabIndex={0}
//                   className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[10] mt-3 w-52 p-2 shadow hidden lg:flex"
//                 >
//                   <li onClick={() => logOut()}>
//                     <a>Logout</a>
//                   </li>
//                 </ul>
//                 <ul
//                   tabIndex={0}
//                   className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[10] mt-3 w-52 p-2 shadow flex lg:hidden"
//                 >
//                   <li>
//                     <Link to={"/"}>Home</Link>
//                   </li>
//                   <li>
//                     <Link to={"/all-products"}>All Products</Link>
//                   </li>
//                   <li>
//                     <Link to={"/contact"}>Contact</Link>
//                   </li>
//                   <li onClick={() => logOut()}>
//                     <a>Logout</a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </>
//         ) : (
//           <>
//             <div className="navbar-end">
//               <Link
//                 to={"/login"}
//                 className="text-white text-xl px-8 border-[2px] py-1 rounded-2xl"
//               >
//                 Login
//               </Link>
//             </div>
//           </>
//         )}
//       </div>
//     </>
//   );
// }

// export default Navbar;

import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function Navbar() {
  const { logOut, user } = useAuth();
  return (
    <>
      <div className="navbar bg-[#28231D] py-5 px-10">
        <div className="navbar-start">
          <NavLink
            to={"/"}
            className="text-xl lg:text-4xl font-semibold lg:px-5 text-white flex items-center gap-3"
          >
            <img
              src="https://i.ibb.co/RhR7Vt9/user-interface.png"
              alt=""
              className="w-10 h-10 lg:w-12 lg:h-12"
            />
            Mobile Mart
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl space-x-5">
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-red-600 text-white"
                    : "text-white"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/all-products"}
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-red-600 text-white"
                    : "text-white"
                }
              >
                All Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/contact"}
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-red-600 text-white"
                    : "text-white"
                }
              >
                Contact
              </NavLink>
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
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[10] mt-3 w-52 p-2 shadow hidden lg:flex"
                >
                  <li onClick={() => logOut()}>
                    <a>Logout</a>
                  </li>
                </ul>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[10] mt-3 w-52 p-2 shadow flex lg:hidden"
                >
                  <li>
                    <NavLink
                      to={"/"}
                      className={({ isActive }) =>
                        isActive
                          ? "border-b-2 border-red-600 text-white"
                          : "text-white"
                      }
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/all-products"}
                      className={({ isActive }) =>
                        isActive
                          ? "border-b-2 border-red-600 text-white"
                          : "text-white"
                      }
                    >
                      All Products
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/contact"}
                      className={({ isActive }) =>
                        isActive
                          ? "border-b-2 border-red-600 text-white"
                          : "text-white"
                      }
                    >
                      Contact
                    </NavLink>
                  </li>
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
              <NavLink
                to={"/login"}
                className="text-white text-xl px-8 border-[2px] py-1 rounded-2xl"
              >
                Login
              </NavLink>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Navbar;
