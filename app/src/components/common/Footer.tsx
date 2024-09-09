import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Footer() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="mt-16 border border-solid h-full pt-10 pl-10">
      <div className="grid md:grid-cols-5 grid-cols-2 gap-1">
        <div>
          <h2 className="text-[#20B486] font-bold text-l md:text-2xl">F'Blastek</h2>
          <h6 className="mt-6 text-xs md:text-sm">F’blastek@info.com</h6>
          <h6 className="mt-6 text-xs md:text-sm">+212570215600</h6>
        </div>
        <div>
          <h3 className="text-[#20B486] mt-5">Information</h3>
          <ul className="text-[#7E7E7E]">
            <li className="mt-5 text-xs md:text-sm">
              <Link to="/">Home</Link>
            </li>
            <li className="mt-2 text-xs md:text-sm">
              <Link to="/about">About us</Link>
            </li>
            <li className="mt-2 text-xs md:text-sm">
              <Link to="/services">Services</Link>
            </li>
            <li className="mt-2 text-xs md:text-sm">
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-[#20B486] mt-5">Services</h3>
          <ul className="text-[#7E7E7E]">
            <li className="mt-5 text-xs md:text-sm">
              <Link to="/services/babysitter">Babysitter</Link>
            </li>
            <li className="mt-2 text-xs md:text-sm">
              <Link to="/services/tutoring">Soutien Scolaire</Link>
            </li>
            <li className="mt-2 text-xs md:text-sm">
              <Link to="/services/personal-assistance">Aide à la personne</Link>
            </li>
            <li className="mt-2 text-xs md:text-sm">
              <Link to="/services/cleaning">Menage</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-[#20B486] mt-5">Useful links</h3>
          <ul className="text-[#7E7E7E]">
            <li className="mt-5 text-xs md:text-sm">
              <Link to="/account">My Account</Link>
            </li>
            <li className="mt-2 text-xs md:text-sm">
              <Link to="/offers">Offres</Link>
            </li>
            <li className="mt-2 text-xs md:text-sm">
              <Link to="/partner">Become a Partner</Link>
            </li>
            <li className="mt-2 text-xs md:text-sm">
              <Link to="/register">S’inscrire</Link>
            </li>
          </ul>
        </div>
        <div className="col-span-2 md:col-span-1">
          <h3 className="text-[#20B486] mt-5">Newsletter</h3>
          <h6 className="mt-5 text-xs md:text-sm text-[#7E7E7E]">
            Subscribe to our newsletter
          </h6>
          <input
            className="w-2/3 md:w-full text-xs md:text-sm mt-4 p-5 pl-0 bg-[#F5F5F5] text-[#9B9B9B] rounded-lg"
            type="email"
            placeholder="Your email address"
          />
          <button className="w-2/3 bg-[#20B486] text-sm mt-4 text-white rounded-lg p-3">
            Subscribe
          </button>
        </div>
      </div>
      <footer className="mt-10 md:flex">
        <div className="text-[#7E7E7E] mt-3 md:block hidden w-1/3 text-xs">
          © 2024 F’Blastek. All rights reserved.
        </div>
        <div className="container flex items-center justify-center mx-auto space-x-4">
          <img src="../../../landingPage/footer-payment-method.png" alt="Visa" className="h-6" />
        </div>
        <div className="hidden p-2 mt-1 md:flex">
          <span className="[&>svg]:h-4 [&>svg]:w-5 mx-1 [&>svg]:fill-[#9B9B9B]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. --> */}
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
            </svg>
          </span>
          <span className="[&>svg]:h-4 [&>svg]:w-5 mx-1 [&>svg]:fill-[#9B9B9B]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. --> */}
              <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.5 100.3 224.2 222.6 248V327.7h-67V256h67v-54.6c0-66.3 39.4-103 99.5-103 28.9 0 59.1 5.2 59.1 5.2v65h-33.3c-32.8 0-43 20.3-43 41.1V256h73l-11.6 71.7h-61.4V504C403.7 480.2 504 379.5 504 256z" />
            </svg>
          </span>
          <span className="[&>svg]:h-4 [&>svg]:w-5 mx-1 [&>svg]:fill-[#9B9B9B]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. --> */}
              <path d="M459.4 151.7c.3 4.5.3 9 .3 13.6 0 138.7-105.6 298.5-298.5 298.5-59.5 0-114.7-17.1-161.1-47.1 8.4 1 16.6 1.3 25.4 1.3 49.1 0 94.3-16.6 130.3-44.8-46.1-.8-84.8-31.2-98.1-72.8 6.5 1 13.1 1.6 20 1.6 9.6 0 19-1.3 27.9-3.6-48.1-9.7-84.1-52.2-84.1-103.3v-1.3c14.3 7.9 30.5 12.6 47.8 13.1-28.3-19-46.8-51-46.8-87.4 0-19.3 5.2-37.4 14.3-52.9 52.3 64.3 130.5 106.5 218.8 111-1.6-7.7-2.6-15.7-2.6-23.8 0-57.4 46.5-103.9 103.9-103.9 29.9 0 56.9 12.6 75.8 32.9 23.8-4.5 46.1-13.4 66.2-25.3-7.9 24.7-24.7 45.4-46.5 58.4 21.2-2.3 41.6-8.2 60.5-16.4-14.3 20.7-32.4 39.2-53.3 53.8z" />
            </svg>
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
