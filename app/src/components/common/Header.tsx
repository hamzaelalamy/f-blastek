import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="fixed top-0 left-0 z-50 w-full">
      <nav className="hidden p-4 bg-transparent bg-white border-black backdrop-blur-sm bg-opacity-35 md:block">
        <div className="container flex flex-col items-center justify-between mx-auto md:flex-row">
          <div className="text-[#20B486] text-xl font-bold mb-4 md:mb-0">F'Blastek</div>
          <ul className="z-50 flex flex-col items-center justify-between md:flex-row md:space-x-4">
            <li>
              <NavLink className="text-white text-lg hover:text-[#F98C60]  drop-shadow-[0_1px_0px_rgba(0,0,0,1)] " to="/" replace>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="text-white text-lg hover:text-[#F98C60]  drop-shadow-[0_1px_0px_rgba(0,0,0,1)] " to="/About" replace>
                About
              </NavLink>
            </li>
            <li>
              <NavLink className="text-white text-lg hover:text-[#F98C60]  drop-shadow-[0_1px_0px_rgba(0,0,0,1)] " to="#" replace>
                Services
              </NavLink>
            </li>
            <li>
              <NavLink className="text-white text-lg hover:text-[#F98C60]  drop-shadow-[0_1px_0px_rgba(0,0,0,1)] " to="/help" replace>
                Help
              </NavLink>
            </li>
          </ul>
          <div className="flex flex-col items-center justify-between md:flex-row">
            <button
              className="bg-[#20B486] hover:bg-green-400 text-xs text-white py-1 px-4 mb-2 md:mb-0 md:mr-1 rounded-md"
              type="submit"
            >
              Sign In
            </button>
            <button
              className="bg-[#F98C60] hover:bg-orange-500 text-xs text-white py-1 px-4 rounded-md"
              type="submit"
            >
              <NavLink to={"/register"}>
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
