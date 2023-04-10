import React from "react";

const Button = ({ type, className, children }) => {
  return (
    <button
      type={type || "button"}
      className={`tracking-wide font-semibold bg-indigo-500 text-gray-100  rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
