function Progress({ current, total }) {

  const width = ((current + 1) / total) * 100

  return (
    <div className="progress-bar">

      <div
        className="progress-fill"
        style={{ width: `${width}%` }}
      />

    </div>
  )
}

export default Progress
