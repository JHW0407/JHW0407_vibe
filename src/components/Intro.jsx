function Intro({ onStart }) {
  return (
    <div
      className="intro"
      style={{
        backgroundImage: "url('/images/hero-bg.jpg')",
      }}
    >
      <div className="overlay">
        <img src="/images/logo.png" className="logo" />

        <div className="title-box">
          ✨🌌💫
          <h1>Auracast</h1>
          💜🪐⭐
        </div>

        <p className="subtitle">
          당신의 오라와 성격을 분석해보세요
        </p>

        <button onClick={onStart}>테스트 시작하기</button>
      </div>
    </div>
  )
}

export default Intro
