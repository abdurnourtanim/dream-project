import React from "react";

const LoginByApp = ({ icon, text, className }) => {
  return (
    <button
      className={`w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 dark:bg-indigo-900 text-gray-800 dark:text-gray-100 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline ${className}`}
    >
      <div className="bg-whitep-2 rounded-full">
        <img src={icon} alt="google_login" />
      </div>
      <span className="ml-4"> {text} </span>
    </button>
  );
};

export default LoginByApp;
