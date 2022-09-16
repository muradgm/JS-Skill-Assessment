import React from "react";

const Container = ({ children, classes }) => {
  return (
    <div
      className={`rounded-lg border shadow-md  divide-gray-200 bg-white outline-none focus:outline-none ${
        classes ? classes : ""
      }`}
    >
      {children}
    </div>
  );
};

export default Container;
