import React from "react";

const Features = () => {
  return (
    <div className="container bg-gray-100 dark:bg-gray-800 pb-8 md:pb-10 flex flex-col px-4 mx-auto pt-0 md:pt-10 space-y-12 md:space-y-0 md:flex-row ">
      {/* What's Different  */}
      <div className="flex flex-col space-y-12 md:w-1/2">
        <h2 className="max-w-md text-4xl  font-bold text-center md:text-left text-black dark:text-white">
          What's different about Manage?
        </h2>
        <p className="max-w-sm text-center text-darkGrayishBlue md:text-left text-black dark:text-gray-100 ">
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>
      {/* Numbered List  */}
      <div className="flex flex-col space-y-8 md:w-1/2">
        {/* list 1  */}
        <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
          <div className="rounded-full bg-indigo-100 dark:bg-indigo-800 md:dark:bg-transparent  md:bg-transparent">
            <div className="flex items-center space-x-2">
              <div className="px-4 py-2 font-bold text-white dark:text-black rounded-full md:py-1 bg-indigo-600 dark:bg-indigo-300">
                01
              </div>
              <h3 className="text-base text-gray-800 dark:text-gray-100 font-bold md:mb-4 md:hidden">
                Track company-wide progress
              </h3>
            </div>
          </div>

          <div>
            <h3 className="hidden text-black dark:text-white mb-4 text-lg font-bold md:block">
              Track company-wide progress
            </h3>
            <p className="text-gray-700 dark:text-gray-100 px-4 md:px-0">
              See how your day-to-day tasks fit into the wider vision. Go from
              tracking progress at the milestone level all the way down to the
              smallest of details. Never lose sight of the bigger picture again.
            </p>
          </div>
        </div>
        {/* list 2 */}
        <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
          <div className="rounded-full  bg-indigo-100 dark:bg-indigo-800 md:dark:bg-transparent  md:bg-transparent">
            <div className="flex items-center space-x-2">
              <div className="px-4 py-2 font-bold text-white dark:text-black rounded-full md:py-1 bg-indigo-600 dark:bg-indigo-300">
                02
              </div>
              <h3 className="text-base  text-gray-800 dark:text-gray-100 font-bold md:mb-4 md:hidden">
                Track company-wide progress
              </h3>
            </div>
          </div>

          <div>
            <h3 className="hidden text-black dark:text-white mb-4 text-lg font-bold md:block">
              Track company-wide progress
            </h3>
            <p className="text-gray-700 dark:text-gray-100  px-4 md:px-0">
              See how your day-to-day tasks fit into the wider vision. Go from
              tracking progress at the milestone level all the way down to the
              smallest of details. Never lose sight of the bigger picture again.
            </p>
          </div>
        </div>
        {/* list 3  */}
        <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
          <div className="rounded-full  bg-indigo-100 dark:bg-indigo-800 md:dark:bg-transparent md:bg-transparent">
            <div className="flex items-center space-x-2">
              <div className="px-4 py-2 font-bold text-white dark:text-black rounded-full md:py-1 bg-indigo-600 dark:bg-indigo-300">
                03
              </div>
              <h3 className="text-base  text-gray-800 dark:text-gray-100 font-bold md:mb-4 md:hidden">
                Track company-wide progress
              </h3>
            </div>
          </div>

          <div>
            <h3 className="hidden text-black dark:text-white  mb-4 text-lg font-bold md:block">
              Track company-wide progress
            </h3>
            <p className="text-gray-700 dark:text-gray-100 px-4 md:px-0">
              See how your day-to-day tasks fit into the wider vision. Go from
              tracking progress at the milestone level all the way down to the
              smallest of details. Never lose sight of the bigger picture again.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
