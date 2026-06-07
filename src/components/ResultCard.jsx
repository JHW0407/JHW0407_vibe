const resultData = {
  INFP: {
    title: '?? ???',
    desc: '??? ???? ???? ??? ??? ??',
    color: '#a855f7'
  },
  ENFP: {
    title: '???? ??',
    desc: '??? ???? ?? ???? ?? ??? ??',
    color: '#f472b6'
  },
  INTJ: {
    title: '??? ???',
    desc: '???? ??? ???? ??? ??',
    color: '#3b82f6'
  },
  ESTJ: {
    title: '???? ??',
    desc: '????? ??? ??? ??? ??? ??',
    color: '#06b6d4'
  }
}

function ResultCard({ type }) {
  const result = resultData[type] || {
    title: type,
    desc: '???? ??? ??? ?? ??',
    color: '#38bdf8'
  }

  const imageSrc = `${import.meta.env.BASE_URL}images/result/${type.toLowerCase()}.png`

  return (
    <div
      className="result-container"
      style={{
        boxShadow: `0 0 25px ${result.color}`
      }}
    >

      <img
        src={imageSrc}
        alt={type}
        className="result-image"
      />

      <h1
        className="result-type"
        style={{
          color: result.color
        }}
      >
        {type}
      </h1>

      <h2 className="result-title">
        {result.title}
      </h2>

      <p className="result-description">
        {result.desc}
      </p>

      <button
        className="retry-button"
        onClick={() => window.location.reload()}
      >
        ?? ?????
      </button>
    </div>
  )
}

export default ResultCard