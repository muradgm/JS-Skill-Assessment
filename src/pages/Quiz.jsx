import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Section, Header, Button } from "../components/index.js";
import { DataContext } from "../context/DataContext";

const Quiz = () => {
  const {
    randomQuestions,
    setScore,
    shuffleQuestions,
    score,
    currQues,
    setCurrQues,
    timerState,
    setTimerState,
    minutes,
    seconds,
    duration,
    setDuration,
  } = useContext(DataContext);

  // const [currentQuestion, setCurrentQuestion] = useState({});

  //state to handle user answer
  const [choices, setChoices] = useState([]);
  const [selected, setSelected] = useState("");
  const [correct, setCorrect] = useState("");
  // to handle th question array and show the code part if there is one
  const [showCode, setShowCode] = useState(false);
  // handling the progress bar
  const steps = 100 / 15;
  const [stepper, setStepper] = useState(steps);
  // used to highlight selected answer/ change styling
  const [highlightSelected, setHighlightSelected] = useState(false);
  // used to add styling to the timer section
  const [warning, setWarning] = useState(false);
  // const [questionsArray, setQuestionsArray] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    setChoices(
      shuffleQuestions(
        randomQuestions[currQues].incorrect_answer.concat([
          randomQuestions[currQues].correct_answer,
        ])
      )
    );

    setCorrect(randomQuestions[currQues].correct_answer);
  }, [currQues]);

  useEffect(() => {
    setShowCode(randomQuestions[currQues].length > 1);
  }, [currQues]);

  const handleSelected = (e, choice) => {
    setSelected(choice);
    setHighlightSelected(true);
  };

  useEffect(() => {
    if (duration === 0 && timerState) {
      setStepper(stepper + steps);
      setCurrQues(currQues + 1);
      setDuration(15);
      if (currQues + 1 === randomQuestions.length) {
        navigate("/result");
      }
    } else if (timerState) {
      const timer = setInterval(() => {
        setDuration((duration) => {
          if (duration > 0) {
            return duration - 1;
          } else {
            return 0;
          }
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [duration, currQues, timerState]);

  //! check logic, should be array.length, if currQues === 14 should be outside of first if statement
  const handleClick = () => {
    setTimerState(true);
    setDuration(10);

    if (currQues < 15) {
      if (selected === correct) {
        setScore(score + 1);
      }
      setStepper(stepper + steps);
      setCurrQues(currQues + 1);
      setSelected("");

      if (currQues === randomQuestions.length - 1) {
        navigate("/result");
        setTimerState(false);
      }
    }
    setHighlightSelected(false);
  };

  useEffect(() => {
    if (randomQuestions[currQues].question.length > 1) {
      setShowCode(true);
    }
  }, [currQues]);

  useEffect(() => {
    setWarning(duration <= 10 ? true : false);
  }, [duration]);

  return (
    <Container classes="max-w-xxl min-w-full divide-y">
      <Section>
        <Header />
        <div className="">
          <p className="font-bold antialiased flex justify-end">
            Q {currQues + 1}/{randomQuestions.length}
          </p>
          <p className="text-xl my-5 antialiased">
            {randomQuestions[currQues].question[0]}
          </p>
        </div>
        {showCode && (
          <div className="px-6 space-y-1">
            <code>
              {randomQuestions[currQues].question[1] &&
                randomQuestions[currQues].question[1]
                  .split("\n")
                  .map((line, idx) => <p key={idx}>{line}</p>)}
            </code>
          </div>
        )}
      </Section>
      <Section>
        <ul>
          {choices.map((choice, idx) => (
            <button
              key={idx}
              type="button"
              className={`w-full  hover:text-white border text-white focus:ring-4 focus:outline-none  font-medium rounded-lg text-md px-5 py-2.5 text-center mr-2 mb-2 ${
                highlightSelected && selected === choice
                  ? "bg-blue-600 border-blue-700 hover:bg-blue-800 focus:ring-blue-300 "
                  : "text-blue-800 border-blue-700 hover:bg-blue-800 focus:ring-blue-300"
              }`}
              onClick={(e) => handleSelected(e, choice)}
            >
              {choice}
            </button>
          ))}
        </ul>
      </Section>
      <Section classes="flex-col p-0 justify-between">
        <div className="w-full bg-gray-200 h-2.5">
          <div
            className="bg-blue-600 h-2.5"
            style={{ width: `${stepper}%` }}
          ></div>
        </div>
        <div className="flex justify-between pt-7 px-10 pb-10">
          <div className="flex font-bold antialiased items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div className={`${warning && "text-red-500 animate-pulse"}`}>
              {minutes < 10 ? "0" + minutes : minutes}:
              {seconds < 10 ? "0" + seconds : seconds}
            </div>
          </div>
          <Button
            handleClick={handleClick}
            disabled={selected.length === 0 ? true : false}
          >
            {currQues < 14 ? "Next" : "Submit"}
          </Button>
        </div>
      </Section>
    </Container>
  );
};

export default Quiz;
