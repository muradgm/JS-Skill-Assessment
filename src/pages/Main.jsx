import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Container,
  Input,
  Section,
  Header,
} from "../components/index.js";
import { DataContext } from "../context/DataContext";

//Icons
import { MdTimer, MdFormatListBulleted } from "react-icons/md";
import { HiOutlineBadgeCheck } from "react-icons/hi";

const Main = () => {
  const { user, setUser, setTimerState, setDuration } = useContext(DataContext);

  const { name, email } = user;

  //state to show optional email input
  const [show, setShow] = useState(false);

  //create a function to handle the user input
  const handleUserInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const navigate = useNavigate();

  //create a function to handle the start btn
  const handleStartQuiz = () => {
    setTimerState(true);
    setDuration(90);
    navigate("/quiz");
  };

  //function to handle showing email on checkbox click
  const handleCheckbox = (e) => {
    e.target.checked === true ? setShow(true) : setShow(false);
  };

  // console.log("QUESTION", Object.values(randomQuestions[currQues])); // question array

  return (
    <Container classes="max-w-xxl min-w-full divide-y">
      <Section classes="pt-4">
        <Header name={name} />
        <p className="text-md antialiased text-gray-600">
          <strong>Topics:</strong> Data Types and Structures, Functions,
          Objects, and Classes; JavaScript Fundamentals; Logic and Control Flow;
          Web Development
        </p>
        <div className="pt-10 space-y-2">
          <div className="flex space-x-3 items-center">
            <MdFormatListBulleted fontSize="25" />
            <p>
              <strong>15</strong> multiple choice questions
            </p>
          </div>
          <div className="flex space-x-3 items-center">
            <MdTimer fontSize="25" />
            <p>
              <strong>1.5 minutes</strong> per question
            </p>
          </div>
          <div className="flex space-x-3 items-center">
            <HiOutlineBadgeCheck fontSize="25" />
            <p>Score in the top 30% to earn a badge</p>
          </div>
        </div>
      </Section>
      <Section>
        <p className="text-lg font-medium antialiased">Before you start</p>
        <p className=" antialiased text-gray-600">
          Please enter your name to start the Quiz.
        </p>
        <div className="space-y-5 max-w-sm bg-white pt-4 capitalize">
          <Input
            type="name"
            handleUserInput={handleUserInput}
            ph="John Doe"
            value={name}
          />
          {show && (
            <Input
              type="email"
              handleUserInput={handleUserInput}
              ph="John@email.com"
              value={email}
            />
          )}
          <div className="flex items-center mb-4">
            <input
              id="checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500  focus:ring-2"
              onClick={handleCheckbox}
            />
            <label htmlFor="checkbox" className="ml-2 text-sm text-gray-900">
              Send me my score
            </label>
          </div>
        </div>
        {show && (
          <p
            id="helper-text-explanation"
            className="mt-2 text-sm text-gray-500"
          >
            We’ll never share your details. Read our
            <a href="#" className="font-medium text-blue-600 hover:underline">
              {""} Privacy Policy
            </a>
            .
          </p>
        )}
      </Section>
      <Section classes="flex justify-end">
        <Button
          disabled={name.length === 0 ? true : false}
          handleClick={handleStartQuiz}
        >
          Start Quiz
        </Button>
      </Section>
    </Container>
  );
};

export default Main;
