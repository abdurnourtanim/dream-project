import React from "react";

const SocialIcon = ({ to, className, children }) => {
  return (
    <a
      target="_blank"
      href={to}
      className={`bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3 ${className}`}
      rel="noreferrer"
    >
      {children}
    </a>
  );
};

export default SocialIcon;
