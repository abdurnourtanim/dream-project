import React from "react";

const SocialIcon = ({ to, className, children }) => {
  return (
    <a
      target="_blank"
      href={to}
      className={`bg-white dark:bg-indigo-100 text-blue-800 dark:text-blue-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3 ${className}`}
      rel="noreferrer"
    >
      {children}
    </a>
  );
};

export default SocialIcon;
