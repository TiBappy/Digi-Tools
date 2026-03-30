import React from "react";

const Navbar = () => {
  return (
    <div className="shadow-sm">
      <div className="max-w-6xl mx-auto navbar bg-base-100 ">

        {/* ------------------Navbar Start-------------------------- */}
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
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-3xl text-purple-600 font-bold">DigiTools</a>
        </div>

        {/* ----------------Navbar Center ---------------*/}

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-6">
            <li>Products</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Testimonials</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* -------------------------Navbar End---------------------------- */}

        <div className="navbar-end">
            {/* <ShoppingCart /> */}
            <button className="mr-4">Login</button>
          <a className="btn btn-primary rounded-full">Get Started</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
