import { useState, useContext, useEffect } from "react";
import { DataContext } from "../context/DataContext";
import { Container, Section, Header, Button } from "../components/index.js";
import { GiCheckMark, GiCrossMark } from "react-icons/gi";

const Questions = ({showResults, setShowResukts}) => {
  const { name, userQuizQuestions } = useContext(DataContext);

  userQuizQuestions.map((question) =>
    question.read_more.map((read) =>
      console.log(read["link"], read["reference"])
    )
  );

  return (
    <Container className="divide-y max-w-xxl min-w-full">
      <Section>
        <Header name={name} />
        {userQuizQuestions.map(
          ({ question, correct_answer, selected_answer, read_more }, idx) => (
            <Section key={idx} classes="space-y-0 ">
              <div className="shadow-sm text-base antialiased">
                <div className="rounded-t-lg bg-gray-200 p-6">
                  <p className="font-bold pb-1">
                    {idx + 1}. {question[0]}
                  </p>
                  <p className="px-6 w-1/2 text-base">
                    <code>{question[1]}</code>
                  </p>
                </div>
                <p className="px-6 py-4 bg-gray-100">
                <span className="font-bold text-sm">Correct Answer:</span> {correct_answer}
                </p>
                <p
                  className={`py-4 px-6 rounded-b-lg ${
                    selected_answer === correct_answer
                      ? "bg-green-300 "
                      : "bg-red-300 "
                  }`}
                >
                  <span className="font-bold text-sm">Your Answer:</span> {selected_answer}
                </p>
              </div>

              <div className="text-base antialiased pt-4">
                <p className="inline-block pl-6">read more: </p>{" "}
                <ul className="inline-block">
                  {read_more.map((read, idx) =>
                    read["link"] === "" && read["reference"] === "" ? (
                      <p key={idx} className="text-blue-500 italic">
                        No Resources Available!
                      </p>
                    ) : read["link"] === "" ? (
                      <p key={idx} className="text-blue-500">
                        EXPLANATION: {read["reference"]}
                      </p>
                    ) : (
                      <li key={idx} className="inline-block">
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
            </Section>
          )
        )}
      </Section>
    </Container>
  );
};

export default Questions;
