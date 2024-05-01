import React from "react";

function Header() {
  return (
    <div>
      <nav className="p-4 bg-white border-black">
        <div className="container flex flex-col items-center justify-between mx-auto md:flex-row">
          <div className="mb-4 text-xl font-bold text-green-300 md:mb-0">F'Blastek</div>
          <ul className="flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-4">
            <li>
              <a href="#" className="text-xs text-black hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-xs text-black hover:text-gray-300">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-xs text-black hover:text-gray-300">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-xs text-black hover:text-gray-300">
                Contact
              </a>
            </li>
          </ul>
          <div className="flex flex-col items-center justify-between md:flex-row">
            <button
              className="px-4 py-1 mb-2 text-xs text-white bg-green-300 hover:bg-green-400 md:mb-0 md:mr-1"
              type="submit"
            >
              Sign In
            </button>
            <button
              className="px-4 py-1 text-xs text-white bg-orange-400 hover:bg-orange-500"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
