import results from '../data/results'

function ResultCard({ type }) {

  const result = results[type]

  return (
    <div className="result-card">

      <img
        src={`/images/result/${type.toLowerCase()}.png`}
        alt={type}
      />

      <h1>{type}</h1>

      <h2>{result?.title}</h2>

      <p>{result?.desc}</p>

      <button
        onClick={() => window.location.reload()}
      >
        다시 테스트하기
      </button>

    </div>
  )
}

export default ResultCard
