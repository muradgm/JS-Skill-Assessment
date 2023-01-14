import { createContext, useState, useEffect } from "react";
import questions from "../test.js";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const [userAssessmentReport, setUserAssessmentReport] = useState([]);

  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState("");

  // an array of 15 random questions sliced from the questions array in test.js
  const [randomQuestions, setRandomQuestions] = useState([]);

  const [currQues, setCurrQues] = useState(0);

  //question countdown timer states
  const [duration, setDuration] = useState(null);
  const [timerState, setTimerState] = useState(false);

  // question countdown timer that sets the duration to 90 seconds and runs a setInterval function to handle the countdown to 0

  const minutes = Math.floor(duration / 60);
  const seconds = duration % 60;

  // used to shuffle the question array and the question answers array
  const shuffleQuestions = (questions) => {
    const shuffledQuestions = questions.sort(() => Math.random() - 0.5);

    return shuffledQuestions;
  };

  // shuffle the questions array and slice 15 random questions from it
  useEffect(() => {
    setRandomQuestions(shuffleQuestions(questions).slice(0, 15));
  }, []);

  // console.log("randomQuestions", randomQuestions);
  // console.log("userQuizQuestions", userQuizQuestions);

  return (
    <DataContext.Provider
      value={{
        user,
        setUser,
        score,
        setScore,
        randomQuestions,
        setRandomQuestions,
        currQues,
        setCurrQues,
        duration,
        setDuration,
        timerState,
        setTimerState,
        minutes,
        seconds,
        shuffleQuestions,
        selected,
        setSelected,
        userAssessmentReport,
        setUserAssessmentReport,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
