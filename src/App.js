import { Routes, Route } from "react-router-dom";
import Quiz from "./pages/Quiz";
import Results from "./pages/Results";
import Main from "./pages/Main";

function App() {
  return (
    <div className=" app box-border flex justify-center items-center min-h-screen max-w-4xl mx-auto">
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/quiz" element={<Quiz />} />
        <Route exact path="/result" element={<Results />} />

        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
