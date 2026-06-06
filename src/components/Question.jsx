import ProgressBar from './ProgressBar'

function Question({ data, current, total, onAnswer }) {

  return (
    <div className="card">

      <ProgressBar current={current} total={total} />

      <h2>{data.question}</h2>

      <div className="btn-group">

        <button onClick={() => onAnswer(data.type, 3)}>
          매우 그렇다
        </button>

        <button onClick={() => onAnswer(data.type, 2)}>
          그렇다
        </button>

        <button onClick={() => onAnswer(data.type, 1)}>
          아니다
        </button>

      </div>

    </div>
  )
}

export default Question
