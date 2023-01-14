import React from "react";

const Modal = ({ children }) => {
  return (
    <>
      <div className="flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
        <div className=" lg:w-9/12 lg:mx-auto inset-0 overscroll-y-auto flex justify-center fixed w-screen">
          {children}
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default Modal;
