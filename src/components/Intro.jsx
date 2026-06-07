function Intro({ onStart }) {
  return (
    <div className="intro-container">
      <img
        src={`${import.meta.env.BASE_URL}images/logo.png`}
        alt="MoodMirror Logo"
        className="main-logo"
      />

      <h1 className="title">AuraCast ?</h1>

      <p className="description">
        ??? ???? ??? ????<br />
        ??? ?? MBTI ???
      </p>

      <button className="start-button" onClick={onStart}>
        ??? ????
      </button>
    </div>
  )
}

export default Intro