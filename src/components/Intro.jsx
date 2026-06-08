import Footer from "./Footer";

function Intro({ onStart }) {
  return (
    <div className="intro">
      <img
        src="/images/logo.png"
        alt="Auracast"
        className="main-logo"
      />

      <div className="title-box">
        ✨🌈 Auracast 🌈✨
      </div>

      <p className="intro-text">
        당신의 오라와 성격을 분석하는
        감성 MBTI 테스트
      </p>

      <button className="start-btn" onClick={onStart}>
        테스트 시작하기
      </button>

      <Footer />
    </div>
  );
}

export default Intro;
