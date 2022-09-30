import React from "react";

const Modal = ({ children }) => {
  return (
    <>
      <div className="flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
        <div className=" w-9/12 mx-auto inset-0 overscroll-y-auto flex justify-center fixed">
          {children}
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default Modal;

// import React from "react";

// const Modal = ({ children }) => {
//   return (
//     <>
//       <div className="flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
//         <div className="relative items-center justify min-h-screen max-w-4xl mx-auto">
//           {children}
//         </div>
//       </div>
//       <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
//     </>
//   );
// };

// export default Modal;
