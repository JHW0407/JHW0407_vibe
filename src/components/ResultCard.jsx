function ResultCard({ result }) {
  return (
    <div className="result-card">
      <img src={result.image} className="result-img" />

      <h1>{result.mbti}</h1>

      <h2>{result.title}</h2>

      <p>{result.description}</p>
    </div>
  )
}

export default ResultCard
