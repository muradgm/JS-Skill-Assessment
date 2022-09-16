import { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/DataContext";
import { Link } from "react-router-dom";
import {
  Container,
  Section,
  Header,
  Button,
  Loader,
} from "../components/index.js";
import questions from "../test.js";

//Icons
import {
  IoCloseCircleOutline,
  IoWarningOutline,
  IoTrophyOutline,
} from "react-icons/io5";

const ScoreResult = ({ grade, score, name }) => {
  const [result, setResult] = useState({
    icon: "",
    message: "",
    color: "",
  });

  useEffect(() => {
    if (grade === "a") {
      setResult({
        icon: <IoTrophyOutline />,
        message: [
          `Congratulations!`,
          // ${name[0].toUpperCase() + name.slice(1)},
          `You passed the quiz! You scored ${score}/15. You can now proceed to take the test.`,
        ],
        color: "text-green-500",
      });
    } else if (grade === "b") {
      setResult({
        icon: <IoWarningOutline />,
        message: [
          `Good work!`,
          `You scored ${score}/15. You can now take the test, but maybe its a good idea to practice a bit more to ensure you receive the badge`,
        ],
        color: "text-yellow-500",
      });
    } else if (grade === "c") {
      setResult({
        icon: <IoCloseCircleOutline />,
        message: [
          `Sorry!`,
          `You failed the quiz! You scored ${score}/ 15. You can try again.`,
        ],
        color: "text-red-500",
      });
    }
  }, [grade, name, score]);

  return (
    <div className="flex flex-col items-center space-y-2">
      <p className={`mt-4 text-7xl antialiased ${result.color}`}>
        {result.icon}
      </p>
      <div className="px-10 text-2xl antialiased  text-gray-700 flex-col justify-center text-center">
        <p className={`font-bold text-3xl ${result.color}`}>
          {result.message[0]}
        </p>
        <p>{result.message[1]}</p>
      </div>
    </div>
  );
};

const Results = () => {
  const { score, name } = useContext(DataContext);
  const [loadingPage, setLoadingPage] = useState(false);

  const handleLoadingPage = () => {
    setLoadingPage(true);
  };

  useEffect(() => {
    window.onpopstate = function () {
      window.history.pushState(null, "", "/");
      window.location.reload(); //reload home page
    };
  }, []);

  const userScore =
    (score > 12 ? "a" : score <= 12 && score > 10 ? "b" : "c") || "c";

  return (
    <Container classes="max-w-xxl min-w-full divide-y">
      <Section classes="pt-4">
        <Header name={name} />
        <ScoreResult grade={userScore} score={score} name={name} />
      </Section>
      <Section classes="flex justify-between space-y-0">
        <Link to="/">
          <Button resultsBtn="text-blue-600  ring-2 ring-blue-600 hover:bg-blue-600 hover:text-white hover:ring-0">
            Show Results
          </Button>
        </Link>
        <Button handleClick={handleLoadingPage}>Try Again</Button>
        {loadingPage && (
          <Loader loadingPage={loadingPage} setLoadingPage={setLoadingPage} />
        )}
      </Section>
    </Container>
  );
};

export default Results;
