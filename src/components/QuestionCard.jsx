import "../styles/question.css";

function QuestionCard({ question, onAnswer }) {
  return (
    <div className="question-card">
      <h2>{question.question}</h2>

      <button
        onClick={() => onAnswer(question.a.type)}
      >
        {question.a.text}
      </button>

      <button
        onClick={() => onAnswer(question.b.type)}
      >
        {question.b.text}
      </button>
    </div>
  );
}

export default QuestionCard;
