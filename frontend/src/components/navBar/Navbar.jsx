import React from 'react'
import Logo from "../../assets/Images/logo 2.gif"
import { Link, Outlet } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <nav className="bg-white dark:bg-white fixed w-full z-20 top-0 start-0 ">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto  ">
    <Link
      to="/"
      className="flex items-center space-x-3 rtl:space-x-reverse"
    >
      <img
        src={Logo}
        className="h-15 lg:w-full md:w-full sm:w-1/3"
        alt="Infi Notes Logo"
      />
      
    </Link>
    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button
        type="button"
        className="text-white bg-red-700 hover:bg-black-800 focus:ring-4 focus:outline-none focus:ring-black-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-red-600 dark:hover:bg-black-700 dark:focus:ring-black-800"
      ><Link to="/login">Log In/ Sign Up</Link>
        
      </button>
      <button
        data-collapse-toggle="navbar-sticky"
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-sticky"
        aria-expanded="false"
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
            strokeWidth={2}
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
    </div>
    <div
      className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
      id="navbar-sticky"
    >
      <ul className=" flex flex-col  md:p-0 mt-1 font-medium   rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white  md:dark:bg-white dark:border-gray-700">
        <li>
          <Link
            to="/"
            className="block py-2 px-3 text-black bg-red-700 rounded md:bg-transparent md:text-red-700 md:p-0 md:dark:text-red-500"
            aria-current="page"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/courses"
            className=" block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 md:p-0 md:dark:hover:text-red-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >
            Courses
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 md:p-0 md:dark:hover:text-red-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 md:p-0 md:dark:hover:text-red-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

<Outlet/>
    </>
  )
}

export default Navbar