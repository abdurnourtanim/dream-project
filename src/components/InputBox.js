import React from "react";

const InputBox = ({ type, placeholder, className }) => {
  return (
    <input
      className={`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-300 text-sm focus:outline-none focus:border-gray-400 dark:focus:border-gray-500 focus:bg-white dark:focus:bg-black ${className}`}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default InputBox;
