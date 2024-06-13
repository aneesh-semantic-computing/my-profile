'use client';
import Link from "next/link";
import { useState } from "react";
import { NavigationItem } from "../types/Navigation";

const Navbar = ({ title, cta_text }: NavigationItem) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-gray-200">
      <div className="container flex flex-wrap relative items-center justify-between mx-auto p-4">
         <div className="flex flex-wrap items-center justify-between">
           <Link href="/">
             <span className="flex items-center space-x-2 text-2xl font-medium text-gray-100">
               <span>{title}</span>
             </span>
           </Link>
         </div>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className={`${!isOpen ? "hidden " : ""}max-md:w-11/12 max-md:absolute max-md:top-full z-50 md:block md:w-auto" id="navbar-default`}>
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row max-md:bg-black md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            <li>
              <Link
                href="/my-skills"
                className="block py-2 px-3 rounded md:border-0 md:hover:text-blue-700 md:p-0"
                onClick={() => setIsOpen(false)}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                href="/#testimonials"
                className="block py-2 px-3 rounded md:border-0 md:hover:text-blue-700 md:p-0"
                onClick={() => setIsOpen(false)}
              >
                Testimonials
              </Link>
            </li>
            <li>
              <a
                href="/projects"
                className="block py-2 px-3 rounded md:border-0 md:hover:text-blue-700 md:p-0"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="/contact-me"
                className="block py-2 px-3 rounded md:border-0 md:hover:text-blue-700 md:p-0"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
