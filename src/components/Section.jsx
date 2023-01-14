import React from "react";

const Section = ({ children, classes }) => {
  return <div className={`p-10 ${classes ? classes : ""}`}>{children}</div>;
};

export default Section;
