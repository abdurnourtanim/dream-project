import React from "react";
import { Link } from "react-router-dom";
import illustrationIntro from "../assets/image/banner.svg";
import Button from "./Button";

const Header = () => {
  return (
    <div className="container bg-gray-100 dark:bg-gray-800 rounded-t-lg flex flex-col-reverse items-center px-5 mx-auto pt-20 md:pt-32 space-y-0 md:space-y-0 md:flex-row">
      {/* content  */}
      <div className="flex flex-col mt-5 md:mt-0 mb-20 md:mb-32 space-y-12 md:w-1/2">
        <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left text-black dark:text-white">
          Bring everyone together to build better products
        </h1>
        <p className="max-w-sm text-center text-darkGrayishBlue md:text-left text-black dark:text-white ">
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <div className="flex justify-center md:justify-start">
          <Button className="py-3 w-full md:w-auto px-0 md:px-5 ">
            <Link to="/login">Get Started</Link>
          </Button>
        </div>
      </div>
      {/* illustration */}
      <div className="md:w-1/2">
        <img
          className="fill-current text-red-500"
          src={illustrationIntro}
          alt="illustration"
        />
      </div>
    </div>
  );
};

export default Header;
