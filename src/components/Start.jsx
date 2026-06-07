function Start({ onStart }) {
  const bg = `${import.meta.env.BASE_URL}images/logo.png`

  return (
    <div
      className="card start-card"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="start-overlay">
        <h1>MoodMirror ?</h1>

        <p>
          ?? ?? ???? ???<br />
          ?? MBTI ???
        </p>

        <button onClick={onStart}>??? ????</button>
      </div>
    </div>
  )
}

export default Start