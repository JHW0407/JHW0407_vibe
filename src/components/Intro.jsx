function Intro({ onStart }) {

return ( <div className="intro-container">

```
  <img
    src={`${import.meta.env.BASE_URL}images/logo.png`}
    alt="AuraCast Logo"
    className="main-logo"
  />

  <h1 className="title">
    AuraCast ✨
  </h1>

  <p className="description">
    당신의 분위기와 감정을 분석하는<br />
    새로운 감성 MBTI 테스트
  </p>

  <button
    className="start-button"
    onClick={onStart}
  >
    테스트 시작하기
  </button>

</div>
```

)
}

export default Intro
