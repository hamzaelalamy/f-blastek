import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BsArrowLeftCircle } from 'react-icons/bs';
import { AiFillPieChart } from 'react-icons/ai';
import { SiFuturelearn } from 'react-icons/si';
import { SiOpenaccess } from 'react-icons/si';
import { CgProfile } from 'react-icons/cg';
import { FaInbox } from "react-icons/fa";
import { MdOutlineHomeRepairService } from "react-icons/md";
import { IoBookOutline } from "react-icons/io5";
import HamburgerButton from './HamburgerMenuButton/HamburgerButton'
import { GrUserAdmin } from "react-icons/gr";
import { GrUserWorker } from "react-icons/gr";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();

  const Menus = [
    { title: 'Dashboard', path: '/backoffice/dashboard', src: <AiFillPieChart /> },
    { title: 'Clients', path: '/backoffice/clients', src: <CgProfile /> },
    { title: 'Professionals', path: '/backoffice/Professionals', src: <GrUserWorker /> },
    { title: 'Admins', path: '/backoffice/admins', src: <GrUserAdmin /> },
    { title: 'Servies', path: '/backoffice/services', src: <MdOutlineHomeRepairService /> },
    { title: 'Interventions', path: '/backoffice/interventions', src: <IoBookOutline />},
    { title: 'Inbox', path: '/backoffice/inbox', src: <FaInbox /> },
    { title: 'Logout', path: '/login', src: <SiOpenaccess />, gap: 'true' },
  ];

  return (
    <>
      <div
        className={`${open ? 'w-60' : 'w-fit'} hidden sm:block relative h-screen duration-300 bg-[#e9f8f3] border-r border-gray-200 p-5`}
      >
        <BsArrowLeftCircle
          className={`${
            !open && 'rotate-180'
          } absolute text-3xl bg-white fill-slate-800 rounded-full cursor-pointer top-9 -right-4`}
          onClick={() => setOpen(!open)}
        />
        <Link to='/'>
          <div className={`flex ${open && 'gap-x-4'} items-center`}>
            {open && (
              <span className='text-xl font-medium whitespace-nowrap'>
                F'blastek
              </span>
            )}
          </div>
        </Link>

        <ul className='pt-6'>
          {Menus.map((menu, index) => (
            <Link to={menu.path} key={index}>
              <li
                className={`flex items-center gap-x-6 p-3 text-base font-normal rounded-lg cursor-pointer hover:bg-gray-200 ${
                  menu.gap ? 'mt-9' : 'mt-2'
                } ${location.pathname === menu.path && 'bg-gray-200'}`}
              >
                <span className='text-2xl'>{menu.src}</span>
                <span className={`${!open && 'hidden'}`}>{menu.title}</span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
      {/* Mobile Menu */}
      <div className="pt-3">
        <HamburgerButton
          setMobileMenu={setMobileMenu}
          mobileMenu={mobileMenu}
        />
      </div>
      <div className="sm:hidden">
        <div
          className={`${
            mobileMenu ? 'flex' : 'hidden'
          } absolute z-50 flex-col items-center self-end py-8 mt-16 space-y-6 font-bold sm:w-auto left-6 right-6`}
        >
          {Menus.map((menu, index) => (
            <Link
              to={menu.path}
              key={index}
              onClick={() => setMobileMenu(false)}
            >
              <span
                className={`${
                  location.pathname === menu.path && 'bg-gray-200'
                } p-2 rounded-xl hover:bg-gray-200`}
              >
                {menu.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
