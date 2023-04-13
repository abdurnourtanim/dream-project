import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBox = () => {
  return (
    <div className="bg-indigo-800 dark:bg-indigo-600 rounded relative mt-6 lg:mt-14 py-4 pl-4 flex items-center w-full">
      <div>
        <AiOutlineSearch className="text-white text-2xl md:text-3xl" />
      </div>
      <input
        type="text"
        placeholder="Search for answers"
        className=" ml-4 w-full bg-transparent text-base leading-none text-white placeholder-white focus:outline-none"
      />
    </div>
  );
};

export default SearchBox;
