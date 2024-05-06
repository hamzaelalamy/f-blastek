import { Outlet, NavLink } from 'react-router-dom';

function HelpLayout() {
    return (
        <div className="flex flex-col items-center">
            <h2 className='self-start mt-20 ml-20 text-5xl font-bold'>Website help</h2>
            <p className='self-start mt-4 ml-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, quibusdam!</p>

            <nav className='flex mt-4'>
                <NavLink to="faq" className="inline-block px-4 py-2 text-white bg-orange-400 rounded-lg hover:bg-orange-500">FAQ</NavLink>
                <NavLink to="contact" className="inline-block px-4 py-2 ml-4 text-white bg-orange-400 rounded-lg hover:bg-orange-500 ">Contact</NavLink>
            </nav>

            <Outlet />

        </div>
    )
}

export default HelpLayout;
