import { useState } from "react";
import Intro from "./components/Intro";
import QuestionCard from "./components/QuestionCard";
import ResultCard from "./components/ResultCard";
import Progress from "./components/Progress";

import questions from "./data/questions";
import results from "./data/results";

function App() {
  const [started, setStarted] = useState(false);
  const [current, setCurrent] = useState(0);

  const [scores, setScores] = useState({
    E: 0,
    I: 0,
    S: 0,
    N: 0,
    T: 0,
    F: 0,
    J: 0,
    P: 0,
  });

  const [finished, setFinished] = useState(false);

  const handleAnswer = (type) => {
    setScores((prev) => ({
      ...prev,
      [type]: prev[type] + 1,
    }));

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
    }
  };

  const getMBTI = () => {
    return (
      (scores.E >= scores.I ? "E" : "I") +
      (scores.S >= scores.N ? "S" : "N") +
      (scores.T >= scores.F ? "T" : "F") +
      (scores.J >= scores.P ? "J" : "P")
    );
  };

  if (!started) {
    return <Intro onStart={() => setStarted(true)} />;
  }

  if (finished) {
    return <ResultCard result={results[getMBTI()]} />;
  }

  return (
    <div className="app">
      <Progress current={current + 1} total={questions.length} />

      <QuestionCard
        question={questions[current]}
        onAnswer={handleAnswer}
      />
    </div>
  );
}

export default App;
