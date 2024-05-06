import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <div className=" z-50 fixed top-0 left-0 w-full  ">
      <nav className="bg-white  p-4 border-black backdrop-blur-sm	 bg-opacity-35 bg-transparent hidden md:block">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-[#20B486] text-xl font-bold mb-4 md:mb-0">F'Blastek</div>
          <ul className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 z-50">
            <li>
              <a href="#" className="text-white text-xs hover:text-[#F98C60]">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-white  text-xs hover:text-[#F98C60]">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-white text-xs hover:text-[#F98C60]">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-white text-xs hover:text-[#F98C60]">
                Contact
              </a>
            </li>
          </ul>
          <div className="flex flex-col items-center justify-between md:flex-row">
            <button
              className="bg-[#20B486] hover:bg-green-400 text-xs text-white py-1 px-4 mb-2 md:mb-0 md:mr-1 rounded-sm"
              type="submit"
            >
              Sign In
            </button>
            <button
              className="bg-[#F98C60] hover:bg-orange-500 text-xs text-white py-1 px-4 rounded-sm"
              type="submit"
            ><NavLink to={"/register"}>
                Sign Up
              </NavLink>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
