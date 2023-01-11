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

const InfoPage = () => {
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
    <Container classes="w-5/6 divide-y">
    );
};

export default InfoPage;
