import { useState } from 'react'
import Start from './components/Start'
import Question from './components/Question'
import Result from './components/Result'

import questions from './data/questions'

function App() {

  const [started, setStarted] = useState(false)
  const [current, setCurrent] = useState(0)

  const [scores, setScores] = useState({
    E:0,I:0,S:0,N:0,T:0,F:0,J:0,P:0
  })

  const [finished, setFinished] = useState(false)

  const answerQuestion = (type, value) => {

    setScores(prev => ({
      ...prev,
      [type]: prev[type] + value
    }))

    if(current + 1 < questions.length){
      setCurrent(current + 1)
    }
    else{
      setFinished(true)
    }
  }

  const getResult = () => {

    let result = ''

    result += scores.E >= scores.I ? 'E' : 'I'
    result += scores.S >= scores.N ? 'S' : 'N'
    result += scores.T >= scores.F ? 'T' : 'F'
    result += scores.J >= scores.P ? 'J' : 'P'

    return result
  }

  return (
    <div className="app">

      {!started && (
        <Start onStart={() => setStarted(true)} />
      )}

      {started && !finished && (
        <Question
          data={questions[current]}
          current={current}
          total={questions.length}
          onAnswer={answerQuestion}
        />
      )}

      {finished && (
        <Result type={getResult()} />
      )}

    </div>
  )
}

export default App
