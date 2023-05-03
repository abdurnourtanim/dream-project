import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { MdClose, MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { Link, useResolvedPath } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  const [toggleDropdown, setToggleDropdowwn] = useState(false);
  const [toggleIcon, setToggleIcon] = useState(false);
  const { pathname } = useResolvedPath();

  const active =
    "bg-indigo-800 md:bg-transparent text-white md:text-blue-700 dark:md:text-indigo-300 hover:bg-indigo-800 my-2 md:my-0 -mx-2 md:-mx-0";

  const user = true;
  const userImg = "https://avatars.githubusercontent.com/u/71883296?v=4";

  const chageTheme = () => {
    setToggleIcon(!toggleIcon);

    if (toggleIcon) {
      localStorage.setItem("theme", "light");
    } else {
      localStorage.setItem("theme", "dark");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("theme") === null) {
      localStorage.setItem("theme", "light");
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [toggleIcon]);

  return (
    <nav className=" md:px-20 px-0 bg-indigo-100 dark:bg-gray-800  fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 ">
      <div className="max-w-screen-xl flex flex-row flex-wrap items-center justify-between mx-auto p-0 ">
        <div className="flex items-center w-full md:w-fit justify-between p-4">
          <Link to="/" className="hover:cursor-pointer ">
            <Logo className="flex items-center " />
          </Link>

          <div className="flex items-center">
            {user && (
              <Link
                to="/profile"
                className="flex md:hidden mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              >
                <img
                  className="w-10 h-10 rounded-full"
                  src={userImg}
                  alt="user"
                />
              </Link>
            )}
            {localStorage.getItem("theme") === "dark" ? (
              <button
                onClick={chageTheme}
                className=" hover:cursor-pointer visible md:hidden"
              >
                <MdOutlineLightMode className="text-3xl text-white " />
              </button>
            ) : (
              <button
                onClick={chageTheme}
                className=" hover:cursor-pointer visible md:hidden"
              >
                <MdDarkMode className="text-3xl " />
              </button>
            )}

            {!toggleDropdown ? (
              <FaBars
                onClick={() => setToggleDropdowwn(!toggleDropdown)}
                className="text-3xl text-black dark:text-indigo-100 visible md:hidden ml-4 hover:cursor-pointer"
              />
            ) : (
              <MdClose
                onClick={() => setToggleDropdowwn(!toggleDropdown)}
                className="text-3xl text-black dark:text-gray-100 visible md:hidden ml-4 hover:cursor-pointer"
              />
            )}
          </div>
        </div>

        {/* nav menu*/}
        <div
          className={` items-center justify-between  w-full md:w-auto md:order-1 relative md:flex ${
            !toggleDropdown && "hidden"
          }`}
        >
          <ul className="flex flex-col absolute  md:relative w-full  p-6 md:p-0 mt-0 border-t-2 border-purple-300 font-medium border  rounded-none bg-indigo-100 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-indigo-100 dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700 ">
            <li>
              <Link
                to="/"
                className={`block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${
                  pathname === "/" && active
                }`}
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className={`block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${
                  pathname === "/blog" && active
                }`}
                aria-current="page"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${
                  pathname === "/about" && active
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className={`block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${
                  pathname === "/services" && active
                }`}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${
                  pathname === "/contact" && active
                }`}
              >
                Contact
              </Link>
            </li>
            <li>
              {user ? (
                <Link
                  to="/profile"
                  className="flex md:hidden bg-indigo-300 rounded-lg p-2 items-center "
                >
                  <img
                    className="w-12 h-12 rounded-full"
                    src={userImg}
                    alt="user"
                  />
                  <span className="ml-3 font-bold ">Abdur Nour Tanim</span>
                </Link>
              ) : (
                <Link
                  to="/login"
                  className="mt-2 text-1xl py-2 pl-3 pr-4 text-black dark:text-indigo-100 hover:text-indigo-100 transition ease-in-out bg-gray-100 hover:bg-indigo-700  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  px-4 text-center mr-0 dark:bg-gray-800 dark:border dark:border-indigo-100 dark:hover:bg-ingido-700 dark:focus:ring-indigo-800 block md:hidden"
                >
                  Get started
                </Link>
              )}
            </li>
          </ul>
        </div>

        <div className="flex md:order-1 ">
          {user ? (
            <div className="flex items-center ">
              {localStorage.getItem("theme") === "dark" ? (
                <button
                  onClick={chageTheme}
                  className="mr-3 hover:cursor-pointer hidden md:flex"
                >
                  <MdOutlineLightMode className="text-3xl text-white " />
                </button>
              ) : (
                <button
                  onClick={chageTheme}
                  className="mr-3 hover:cursor-pointer hidden md:flex"
                >
                  <MdDarkMode className="text-3xl text-black" />
                </button>
              )}

              <Link
                to="/profile"
                className="hidden md:flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              >
                <img
                  className="w-10 h-10 rounded-full"
                  src={userImg}
                  alt="user"
                />
              </Link>
            </div>
          ) : (
            <div className="flex items-center ">
              {localStorage.getItem("theme") === "dark" ? (
                <button
                  onClick={chageTheme}
                  className="mr-3 hover:cursor-pointer hidden md:flex"
                >
                  <MdOutlineLightMode className="text-3xl text-white" />
                </button>
              ) : (
                <button
                  onClick={chageTheme}
                  className="mr-3 hover:cursor-pointer  hidden md:flex "
                >
                  <MdDarkMode className="text-3xl " />
                </button>
              )}

              <Link
                to="/login"
                className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-0 dark:bg-indigo-600 dark:hover:bg-ingido-700 dark:focus:ring-indigo-800 hidden md:flex"
              >
                Get started
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
