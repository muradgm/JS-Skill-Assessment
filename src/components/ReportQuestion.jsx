import React from "react";

const ReportQuestion = ({
  idx,
  question,
  correct_answer,
  user_answer,
  resources,
}) => {
  return (
    <div key={idx} className="p-10 text-base antialiased">
      <div className="shadow rounded-lg">
        <div className="rounded-t-lg bg-gray-200 p-6">
          <div className="font-bold">
            <p>
              {idx + 1}. {question[0]}
            </p>
          </div>
          <div className="">
            <p className="px-6 w-1/2">
              <code>{question[1]}</code>
            </p>
          </div>
        </div>
        <div className="px-6 py-4 bg-gray-100 flex justify-start items-center">
          <p className="font-bold text-sm mr-2">Correct Answer:</p>
          <p>{correct_answer}</p>
        </div>
        <div
          className={`px-6 py-4 rounded-b-lg flex justify-start items-center ${
            user_answer === correct_answer ? "bg-green-300 " : "bg-red-300 "
          }`}
        >
          <p className="font-bold text-sm mr-2">Your Answer: </p>
          <p>{user_answer}</p>
        </div>
      </div>
      <div className="pt-4 flex items-center justify-start">
        <p className="pl-6 pr-1">read more: </p>{" "}
        <ul className="flex">
          {resources.map((read, idx) =>
            read["link"] === "" && read["reference"] === "" ? (
              <p key={idx} className="text-blue-500 italic">
                No Resources Available!
              </p>
            ) : read["link"] === "" ? (
              <p key={idx} className="text-blue-500">
                EXPLANATION: {read["reference"]}
              </p>
            ) : (
              <li key={idx} className="px-1">
                [{" "}
                <a
                  href={read["link"]}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 underline"
                >
                  {read["reference"]}
                </a>{" "}
                ]
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default ReportQuestion;
