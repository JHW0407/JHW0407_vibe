import Progress from './Progress'

function QuestionCard({
  question,
  current,
  total,
  onAnswer
}) {

  return (
    <div className="question-card">

      <Progress
        current={current}
        total={total}
      />

      <h2>{question.question}</h2>

      <div className="answers">

        <button onClick={() => onAnswer(question.type, 3)}>
          매우 그렇다
        </button>

        <button onClick={() => onAnswer(question.type, 2)}>
          그렇다
        </button>

        <button onClick={() => onAnswer(question.type, 1)}>
          아니다
        </button>

      </div>

    </div>
  )
}

export default QuestionCard
