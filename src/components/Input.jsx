import React, { useEffect, useState } from "react";

const Input = ({ type, handleUserInput, ph, value }) => {
  const [state, setState] = useState(true);
  useEffect(() => {
    if (type !== "name") {
      setState(false);
    }
  }, []);

  return (
    <label htmlFor="helper-text" className={`block`}>
      <span
        className={`block text-sm font-medium text-slate-700 ${
          state ? "after:content-[" * "] after:ml-0.5 after:text-blue-500" : ""
        }`}
      >
        {type}
      </span>
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-1"
        id="helper-text"
        type={type}
        placeholder={ph}
        name={type}
        value={value}
        onChange={handleUserInput}
      />
    </label>
  );
};

export default Input;
