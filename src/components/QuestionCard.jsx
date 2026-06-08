function QuestionCard({ question, onAnswer }) {
  return (
    <div className="question-card">
      <h2>{question.question}</h2>

      <div className="btn-group">
        <button onClick={() => onAnswer(question.a.type)}>
          {question.a.text}
        </button>

        <button onClick={() => onAnswer(question.b.type)}>
          {question.b.text}
        </button>
      </div>
    </div>
  )
}

export default QuestionCard
