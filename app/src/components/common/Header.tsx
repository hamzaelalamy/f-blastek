import { useAppDispatch, useAppSelector } from "../../hooks/ReduxHooks";
import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoSettings } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoLogOut } from "react-icons/io5";

function Header() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // State variable to track user login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const professional = localStorage.getItem("professional");
  const token: string | null = JSON.parse(professional)?.token;

  // Function to handle logout
  useEffect(() => {
    const handleNavbar = () => {
      if (token) {
        console.log(token);
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    };

    // Call handleLogout when component mounts
    handleNavbar();

    // Cleanup function
    return () => {
      // Perform any cleanup if needed
    };
  }, [token]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("professional");
    setIsLoggedIn(false);
    navigate("/login/applicant");
  };

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
              <NavLink className="text-white text-lg hover:text-[#F98C60]  drop-shadow-[0_1px_0px_rgba(0,0,0,1)] " to="/services" replace>
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
            {/* Conditionally render buttons based on login status */}
            {isLoggedIn ? (
              <div className="relative">
                <button
                  className="flex items-center justify-center w-10 h-10 text-gray-600 bg-gray-300 rounded-full focus:outline-none"
                  onClick={toggleDropdown}
                >
                  JD {/* User initials */}
                </button>
                {/* Dropdown menu */}
                {isOpen && (
                  <div className="absolute right-0 z-10 w-48 mt-2 bg-white rounded-md shadow-lg">
                    <NavLink
                      to="/profile"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={toggleDropdown}
                    >
                      <CgProfile className="mr-2 text-gray-500" /> Profile
                    </NavLink>
                    <NavLink
                      to="/settings"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={toggleDropdown}
                    >
                      <IoSettings className="mr-2 text-gray-500" /> Settings
                    </NavLink>
                    <button
                      className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={handleLogout}
                    >
                      <IoLogOut className="mr-2 text-gray-500" /> Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <button
                  className="bg-[#20B486] hover:bg-green-400 text-xs text-white py-1 px-4 mb-2 md:mb-0 md:mr-1 rounded-md"
                  type="submit"
                >
                  <NavLink to={"user/login"}>
                    Sign In
                  </NavLink>
                </button>
                <button
                  className="bg-[#F98C60] hover:bg-orange-500 text-xs text-white py-1 px-4 rounded-md"
                  type="submit"
                >
                  <NavLink to={"register"}>
                    Sign Up
                  </NavLink>
                </button>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
