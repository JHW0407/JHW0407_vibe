import "../styles/result.css";

function ResultCard({ result }) {
  return (
    <div className="result-card">
      <h1>{result.mbti}</h1>

      <img
        src={result.image}
        alt={result.mbti}
        className="result-image"
      />

      <h2>{result.title}</h2>

      <p>{result.desc}</p>

      <button
        onClick={() => window.location.reload()}
      >
        다시 테스트하기
      </button>
    </div>
  );
}

export default ResultCard;
