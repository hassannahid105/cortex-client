import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";

const Navbar = () => {
  const { logOut, myUser } = useContext(AuthContext);
  const navItem = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/addproduct">Add Product</NavLink>
      </li>
      <li>
        <NavLink to="/mycart">My Cart</NavLink>
      </li>
    </>
  );
  const handlelLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="navbar bg-base-100">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItem}
            </ul>
          </div>
          <div>
            <Link to="/">
              <img src="/logo.png" alt="" className="w-24" />
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItem}</ul>
        </div>
        <div className="navbar-end">
          {!myUser ? (
            <div>
              <Link
                to="/login"
                className="text-xl font-semibold bg-blue-400 px-4 py-3 text-white rounded-lg"
              >
                Log In
              </Link>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-4">
              <div className="avatar w-12">
                <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                  <img src={myUser?.photoURL} />
                </div>
              </div>
              <button
                className="text-xl font-semibold bg-blue-400 px-4 py-3 rounded-lg text-white uppercase"
                onClick={handlelLogOut}
              >
                logOut
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
