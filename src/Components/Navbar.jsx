import { ShoppingCart } from "lucide-react";
import React from "react";

const Navbar = ({ carts }) => {
  return (
    <div className="shadow-sm">
      <div className="max-w-6xl mx-auto px-4 navbar bg-base-100">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Products</a>
              </li>
              <li>
                <a>Features</a>
              </li>
              <li>
                <a>Pricing</a>
              </li>
              <li>
                <a>Testimonials</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
            </ul>
          </div>

          <a className="btn btn-ghost text-lg sm:text-2xl md:text-3xl text-purple-600 font-bold">
            DigiTools
          </a>
        </div>

        {/* ----------------Navbar Center ---------------*/}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-6 font-medium">
            <li>
              <a>Products</a>
            </li>
            <li>
              <a>Features</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Testimonials</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
          </ul>
        </div>

        {/* ----------------Navbar End---------------------------- */}
        <div className="navbar-end flex items-center gap-2 sm:gap-4">
          <div className="relative cursor-pointer">
            <ShoppingCart size={22} />

            {carts.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {carts.length}
              </span>
            )}
          </div>

          <button className="hidden sm:block">Login</button>

          <a className="btn btn-primary rounded-full px-4 sm:px-6">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
