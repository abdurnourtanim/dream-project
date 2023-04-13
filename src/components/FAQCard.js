import React from "react";
import { Link } from "react-router-dom";

const FAQCard = ({ title, description, icon: Icon }) => {
  return (
    <div className="focus:outline-none">
      <Link
        to="/"
        className="bg-white dark:bg-gray-800 focus:outline-none shadow-md flex items-center p-4 lg:p-8 cursor-pointer rounded"
      >
        <div className="flex">
          <div>
            <Icon className="w-6 h-6 text-indigo-800 dark:text-indigo-100" />
          </div>
          <div className="ml-4">
            <p className="text-base font-medium leading-none text-gray-800 dark:text-white">
              {title}
            </p>
            <p className="text-xs lg:text-sm xl:text-base lg:leading-normal text-gray-600 dark:text-gray-100 mt-2 2xl:w-7/12">
              {description}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default FAQCard;
