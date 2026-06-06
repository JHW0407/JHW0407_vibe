function Start({ onStart }) {

  return (
    <div className="card">

      <h1>MoodMirror ✨</h1>

      <p>
        당신 안의 분위기를 비추는<br/>
        감성 MBTI 테스트
      </p>

      <button onClick={onStart}>
        테스트 시작하기
      </button>

    </div>
  )
}

export default Start
