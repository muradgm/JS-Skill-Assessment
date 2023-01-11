import { Routes, Route } from "react-router-dom";
import Quiz from "./pages/Quiz";
import Results from "./pages/Results";
import Main from "./pages/Main";
import Questions from "./components/Questions";

function App() {
  return (
    <div className="box-border flex justify-center items-center h-full max-w-3xl lg:w-full lg:py-16">
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/quiz" element={<Quiz />} />
        <Route exact path="/results" element={<Results />} />
        <Route exact path="/results/analyze" element={<Questions />} />

        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
