import React from "react";

const UserDetails = () => {
  return (
    <div className="w-full lg:w-4/12 px-4 lg:order-1">
      <div className="flex justify-center py-4 lg:pt-4 pt-8">
        <div className="mr-4 p-3 text-center">
          <span className="text-xl font-bold block uppercase tracking-wide text-gray-700 dark:text-white">
            22
          </span>
          <span className="text-sm text-gray-500  dark:text-gray-100">
            Friends
          </span>
        </div>
        <div className="mr-4 p-3 text-center">
          <span className="text-xl font-bold block uppercase tracking-wide text-gray-700 dark:text-white">
            10
          </span>
          <span className="text-sm text-gray-500  dark:text-gray-100">
            Photos
          </span>
        </div>
        <div className="lg:mr-4 p-3 text-center">
          <span className="text-xl font-bold block uppercase tracking-wide text-gray-700 dark:text-white">
            89
          </span>
          <span className="text-sm text-gray-500  dark:text-gray-100">
            Comments
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
