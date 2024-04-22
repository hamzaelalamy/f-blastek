import { Link } from 'react-router-dom';

export default function AdminSidebar() {
  return (
    <div className="flex flex-row min-h-screen bg-gray-100">
      <div className="overflow-hidden bg-white lg:w-56 md:w-40 sm:w-32 rounded-r-3xl">
        <div className="flex items-center justify-center h-20 shadow-md">
          <h1 className="text-3xl text-indigo-500 uppercase">Logo</h1>
        </div>
        <ul className="flex flex-col py-4">
          <li>
            <Link to="/dashboard" className="flex flex-row items-center h-12 text-gray-500 transition-transform duration-200 ease-in transform hover:translate-x-2 hover:text-gray-800">
              <span className="inline-flex items-center justify-center w-12 h-12 text-lg text-gray-400"><i className="bx bx-home"></i></span>
              <span className="text-sm font-medium">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/music" className="flex flex-row items-center h-12 text-gray-500 transition-transform duration-200 ease-in transform hover:translate-x-2 hover:text-gray-800">
              <span className="inline-flex items-center justify-center w-12 h-12 text-lg text-gray-400"><i className="bx bx-music"></i></span>
              <span className="text-sm font-medium">Music</span>
            </Link>
          </li>
          <li>
            <Link to="/drink" className="flex flex-row items-center h-12 text-gray-500 transition-transform duration-200 ease-in transform hover:translate-x-2 hover:text-gray-800">
              <span className="inline-flex items-center justify-center w-12 h-12 text-lg text-gray-400"><i className="bx bx-drink"></i></span>
              <span className="text-sm font-medium">Drink</span>
            </Link>
          </li>
          <li>
            <Link to="/shopping" className="flex flex-row items-center h-12 text-gray-500 transition-transform duration-200 ease-in transform hover:translate-x-2 hover:text-gray-800">
              <span className="inline-flex items-center justify-center w-12 h-12 text-lg text-gray-400"><i className="bx bx-shopping-bag"></i></span>
              <span className="text-sm font-medium">Shopping</span>
            </Link>
          </li>
          <li>
            <Link to="/chat" className="flex flex-row items-center h-12 text-gray-500 transition-transform duration-200 ease-in transform hover:translate-x-2 hover:text-gray-800">
              <span className="inline-flex items-center justify-center w-12 h-12 text-lg text-gray-400"><i className="bx bx-chat"></i></span>
              <span className="text-sm font-medium">Chat</span>
            </Link>
          </li>
          <li>
            <Link to="/profile" className="flex flex-row items-center h-12 text-gray-500 transition-transform duration-200 ease-in transform hover:translate-x-2 hover:text-gray-800">
              <span className="inline-flex items-center justify-center w-12 h-12 text-lg text-gray-400"><i className="bx bx-user"></i></span>
              <span className="text-sm font-medium">Profile</span>
            </Link>
          </li>
          <li>
            <Link to="/notifications" className="flex flex-row items-center h-12 text-gray-500 transition-transform duration-200 ease-in transform hover:translate-x-2 hover:text-gray-800">
              <span className="inline-flex items-center justify-center w-12 h-12 text-lg text-gray-400"><i className="bx bx-bell"></i></span>
              <span className="text-sm font-medium">Notifications</span>
              <span className="px-3 py-px ml-auto mr-6 text-sm text-red-500 bg-red-100 rounded-full">5</span>
            </Link>
          </li>
          <li>
            <Link to="/logout" className="flex flex-row items-center h-12 text-gray-500 transition-transform duration-200 ease-in transform hover:translate-x-2 hover:text-gray-800">
              <span className="inline-flex items-center justify-center w-12 h-12 text-lg text-gray-400"><i className="bx bx-log-out"></i></span>
              <span className="text-sm font-medium">Logout</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
