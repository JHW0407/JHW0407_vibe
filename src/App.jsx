import { useState } from 'react'
import Intro from './components/Intro'
import QuestionCard from './components/QuestionCard'
import ResultCard from './components/ResultCard'
import Progress from './components/Progress'
import Footer from './components/Footer'

import questions from './data/questions'
import results from './data/results'

function App() {
  const [started, setStarted] = useState(false)
  const [current, setCurrent] = useState(0)
  const [scores, setScores] = useState({
    E: 0,
    I: 0,
    S: 0,
    N: 0,
    T: 0,
    F: 0,
    J: 0,
    P: 0,
  })

  const [finished, setFinished] = useState(false)
  const [mbti, setMbti] = useState('')

  const handleAnswer = (type) => {
    const updated = {
      ...scores,
      [type]: scores[type] + 1,
    }

    setScores(updated)

    if (current + 1 < questions.length) {
      setCurrent(current + 1)
    } else {
      const result =
        (updated.E > updated.I ? 'E' : 'I') +
        (updated.S > updated.N ? 'S' : 'N') +
        (updated.T > updated.F ? 'T' : 'F') +
        (updated.J > updated.P ? 'J' : 'P')

      setMbti(result)
      setFinished(true)
    }
  }

  if (!started) {
    return <Intro onStart={() => setStarted(true)} />
  }

  if (finished) {
    return <ResultCard result={results[mbti]} />
  }

  return (
    <div className="app">
      <Progress current={current + 1} total={questions.length} />

      <QuestionCard
        question={questions[current]}
        onAnswer={handleAnswer}
      />

      <Footer />
    </div>
  )
}

export default App
