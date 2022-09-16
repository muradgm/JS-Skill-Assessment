import React from "react";

const Button = ({ children, handleClick, disabled, resultsBtn }) => {
  return (
    <button
      type="button"
      className={` font-medium rounded-lg text-base px-8 py-2 text-center  hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-opacity-50 inline-flex items-center disabled:bg-gray-500 disabled:cursor-not-allowed ${
        resultsBtn ? resultsBtn : "bg-blue-600 text-white"
      }`}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
