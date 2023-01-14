import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Section, Header, Button } from "../components/index.js";
import { DataContext } from "../context/DataContext";

// add the selected answers to an object with the question number as the key and the answer as the value and store it in the context and then navigate to the report page to display the report.  The report should include the following:
// header: ${language} ASSESSMENT REPORT
// header: language: ${language} logo and name
// body:
// list of questions with the question number, the question, the user's answer, and the correct answer and the external links to the resources.

// Path: src/pages/Results.jsx
// Compare this snippet from src/pages/Results.jsx:

import questions from "../test.js";

//Icons
import {
  IoCloseCircleOutline,
  IoWarningOutline,
  IoTrophyOutline,
} from "react-icons/io5";

const Report = ({ showReport, setShowReport }) => {
  const { randomQuestions, selected, setSelected } = useContext(DataContext);
  const [report, setReport] = useState({
    language: "",
    questions: [],
    answers: [],
    correctAnswer: [],
    resources: [],
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (selected.length > 0) {
      const language = selected[0].language;
      const questions = selected.map((item) => item.question);
      const answers = selected.map((item) => item.answer);
      const correctAnswers = selected.map((item) => item.correctAnswer);
      const resources = selected.map((item) => item.resources);

      setReport({
        language,
        questions,
        answers,
        correctAnswers,
        resources,
      });
    }
  }, [selected]);

  const handleRetake = () => {
    setSelected([]);
    navigate("/quiz");
  };

  return (
    <Container>
      <Section>
        <Header
          title={`${report.language} ASSESSMENT REPORT`}
          subtitle={`${report.language} logo and name`}
        />
        <div className="report">
          {report.questions.map((question, index) => {
            return (
              <div className="report__item" key={index}>
                <h3 className="report__item__title">
                  Question {index + 1}: {question}
                </h3>
                <p className="report__item__answer">
                  Your answer: {report.answers[index]}
                </p>
                <p className="report__item__answer">
                  Correct answer: {report.correctAnswers[index]}
                </p>
                <p className="report__item__answer">
                  Resources:{" "}
                  {report.resources[index].map((resource, index) => {
                    return (
                      <a
                        href={resource.url}
                        target="_blank"
                        rel="noreferrer"
                        key={index}
                      >
                        {resource.name}
                      </a>
                    );
                  })}
                </p>
              </div>
            );
          })}
        </div>
        <Button
          text="Retake the Quiz"
          icon={<IoCloseCircleOutline />}
          onClick={handleRetake}
        />
      </Section>
    </Container>
  );
};

export default Report;
