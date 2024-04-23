import React from "react";

function Header() {
  return (
    <div>
      <nav className="bg-white p-4 border-black">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-green-300 text-xl font-bold mb-4 md:mb-0">F'Blastek</div>
          <ul className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <li>
              <a href="#" className="text-black text-xs hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-black text-xs hover:text-gray-300">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-black text-xs hover:text-gray-300">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-black text-xs hover:text-gray-300">
                Contact
              </a>
            </li>
          </ul>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <button
              className="bg-green-300 hover:bg-green-400 text-xs text-white py-1 px-4 mb-2 md:mb-0 md:mr-1"
              type="submit"
            >
              Sign In
            </button>
            <button
              className="bg-orange-400 hover:bg-orange-500 text-xs text-white py-1 px-4"
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
