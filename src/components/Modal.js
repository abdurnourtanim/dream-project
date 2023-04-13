import React, { useState } from "react";
import { BsCheckCircle } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import Navbar from "./Navbar";

const Index = () => {
  const [show, setShow] = useState(true);
  return (
    <div>
      <Navbar />
      <div>
        {show && (
          <div
            className="py-12  bg-transparent transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0 mt-24"
            id="modal"
          >
            <div className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
              <div className="relative py-8 px-8 md:px-16 bg-white dark:bg-gray-800 dark:border-gray-700 shadow-md rounded border border-gray-400">
                <div className="w-full flex justify-center text-green-400 mb-4">
                  <BsCheckCircle className="w-10 h-10" />
                </div>
                <h1 className="text-center text-gray-800 dark:text-gray-100 font-lg font-bold tracking-normal leading-tight mb-4">
                  Payment Processing Successful
                </h1>
                <p className="mb-5 text-sm text-gray-600 dark:text-gray-400 text-center font-normal">
                  Thank you for your payment. An automated payment receipt will
                  be sent to your email. Check the action below for more
                  details.
                </p>
                <div className="flex items-center justify-center w-full">
                  <button className="focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-4 sm:px-8 py-2 text-xs sm:text-sm">
                    Manage Plan
                  </button>
                  <button
                    className="focus:outline-none ml-3 bg-gray-100 dark:bg-gray-700 dark:border-gray-700 dark:hover:bg-gray-600 transition duration-150 text-gray-600 dark:text-gray-400 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm"
                    onClick={() => setShow(!show)}
                  >
                    Cancel
                  </button>
                </div>
                <div
                  className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-500 transition duration-150 ease-in-out"
                  onClick={() => setShow(!show)}
                >
                  <IoMdClose className="w-7 h-7" />
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="w-full flex justify-center py-12" id="button">
          <button
            className="focus:outline-none mx-auto transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-4 sm:px-8 py-2 text-xs sm:text-sm"
            onClick={() => setShow(!show)}
          >
            Open Modal
          </button>
        </div>
      </div>
    </div>
  );
};
export default Index;
