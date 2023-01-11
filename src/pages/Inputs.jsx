import React, { useEffect, useState } from "react";

const Inputs = ({ label, name, type = "text", ...rest }) => {
  const [state, setState] = useState(true);
  useEffect(() => {
    if (type !== "name") {
      setState(false);
    }
  });

  return (
    <div className="relative z-0 w-full mb-8 focus-within:border-blue-500">
      <input
        type={type}
        id={name}
        placeholder=" "
        {...rest}
        className="px-0 mt-1 pt-0 block w-full border-0 border-b-2 appearance-none focus:outline-none bg-transparent focus-within:border-blue-500 border-gray-500"
      />
      <label
        htmlFor={name}
        className={`absolute top-0 -z-1 duration-300 origin-0 text-gray-500`}
      >
        {label}
      </label>
    </div>
  );
};

export default Inputs;
