import { useState, useContext, useEffect } from "react";
import { DataContext } from "../context/DataContext";
import { Container, Section, Header, Button } from "../components/index.js";
import { MdClose } from "react-icons/md";
import Modal from "./Modal";
import Question from "./Question";

const Questions = ({ showResults, setShowResults }) => {
  const { userName, userQuizQuestions } = useContext(DataContext);

  userQuizQuestions.map((question) =>
    question.read_more.map((read) =>
      console.log(read["link"], read["reference"])
    )
  );

  return (
    <>
      {showResults ? (
        <Modal>
          <Container classes="my-10 overflow-y-scroll">
            <button
              className="fixed top-0 right-0 p-6"
              onClick={() => {
                setShowResults(false);
              }}
            >
              <MdClose className="text-3xl" />
            </button>
            <Section classes="space-x-0">
              {/* <Header name={name} /> */}
              <h1 className="mt-4 text-2xl font-bold text-center">
                Hello {userName()}, here is your results.
              </h1>
            </Section>
            <Section classes="space-y-0">
              {userQuizQuestions.map(
                (
                  { question, correct_answer, selected_answer, read_more },
                  idx
                ) => (
                  <Question
                    idx={idx}
                    correct_answer={correct_answer}
                    read_more={read_more}
                    selected_answer={selected_answer}
                    question={question}
                  />
                )
              )}
            </Section>
          </Container>
        </Modal>
      ) : null}
    </>
  );
};

export default Questions;
