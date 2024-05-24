import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase.config";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [user] = useAuthState(auth);
  const [signOut] = useSignOut(auth);

  const handleLogout = async () => {
    await signOut();
  };
  return (
    <div className="navbar bg-base-100 sticky top-0 px-16 z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className=" lg:hidden">
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
            <li>
              <a>All Recepies</a>
            </li>
            <li>
              <a>About Us</a>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
          </ul>
        </div>
        <a className=" text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex items-center gap-6 px-1">
          <li>
            <a>All Recepies</a>
          </li>
          <li>
            <Link to={"/about"}>About Us</Link>
          </li>
          <li>
            <a>Contact Us</a>
          </li>
        </ul>
      </div>
      {!user?.email ? (
        <div className="navbar-end flex gap-4">
          <Link to={"/login"} className="btn">
            Login
          </Link>
          <Link to={"/register"} className="btn">
            Registration
          </Link>
        </div>
      ) : (
        <div className="navbar-end flex gap-4">
          <div>
            <button className="btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
          <div>
            <Link to={"/dashboard"} className="btn">
              Dashboard
            </Link>
          </div>

          <div className="avatar placeholder">
            <div className="bg-neutral text-neutral-content rounded-full w-8">
              <span>AS</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
