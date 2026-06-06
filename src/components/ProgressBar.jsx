function ProgressBar({ current, total }) {

  const percent = ((current + 1) / total) * 100

  return (
    <div className="progress">

      <div
        className="progress-inner"
        style={{ width: `${percent}%` }}
      />

    </div>
  )
}

export default ProgressBar
