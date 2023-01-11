import React from "react";

const Section = ({ children, classes }) => {
  return (
    <div className={`p-4 space-y-0 ${classes ? classes : ""}`}>{children}</div>
  );
};

export default Section;
