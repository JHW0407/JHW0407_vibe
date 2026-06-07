const resultData = {
  INFP: {
    title: '달빛 몽상가',
    desc: '감성이 풍부하며 이상적인 세상을 꿈꾸는 타입',
    color: '#a855f7'
  },
  ENFP: {
    title: '자유로운 불꽃',
    desc: '열정과 에너지로 주변 분위기를 밝게 만드는 타입',
    color: '#f472b6'
  },
  INTJ: {
    title: '고독한 전략가',
    desc: '차분하게 미래를 설계하는 분석형 타입',
    color: '#3b82f6'
  },
  ESTJ: {
    title: '카리스마 리더',
    desc: '현실적이며 조직을 이끄는 능력이 뛰어난 타입',
    color: '#06b6d4'
  }
}

function ResultCard({ type }) {
  const result = resultData[type] || {
    title: type,
    desc: '당신만의 특별한 개성을 가진 유형',
    color: '#38bdf8'
  }

  const imageSrc = new URL(`/images/result/${type.toLowerCase()}.png`, import.meta.url).href

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
        다시 테스트하기
      </button>
    </div>
  )
}

export default ResultCard
