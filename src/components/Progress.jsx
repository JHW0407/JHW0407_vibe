function Progress({ current, total }) {
  const percent = (current / total) * 100;

  return (
    <div className="progress-wrap">
      <div
        className="progress-bar"
        style={{ width: `${percent}%` }}
      ></div>
    </div>
  );
}

export default Progress;
