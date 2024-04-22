import React from "react";

function Header() {
  return (
    <div>
      <nav className="bg-white p-4  border-black">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-green-300 text-xl font-bold">F'Blastek</div>
          <ul className="flex items-center space-x-4">
            <li>
              <a href="#" className="text-black text-xs  hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-black text-xs ml-8 hover:text-gray-300">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-black text-xs ml-8 hover:text-gray-300">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-black text-xs ml-8 hover:text-gray-300">
                Contact
              </a>
            </li>
          </ul>
          <div className="justify-between">
            <button
              className="bg-green-300  hover:bg-green-400 text-xs text-white    py-1 px-4  "
              type="submit"
            >
              Sign In
            </button>
            <button
              className="bg-orange-400  hover:bg-orange-500 text-xs text-white  ml-1  py-1 px-4 "
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
