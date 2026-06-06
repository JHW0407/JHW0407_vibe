function Intro({ onStart }) {

  return (
    <div className="intro">

      <h1>AuraCast ✨</h1>

      <p>
        당신의 분위기와 감정을 분석하는<br />
        새로운 감성 성격 테스트
      </p>

      <button onClick={onStart}>
        시작하기
      </button>

    </div>
  )
}

export default Intro
