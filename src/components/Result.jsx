const descriptions = {

  INFP:'감성적이며 이상을 추구하는 몽상가 타입',
  ENFP:'밝고 자유로운 분위기의 아이디어 뱅크',
  INTJ:'전략적이고 독립적인 완벽주의자',
  ESTJ:'현실적이며 리더십이 강한 관리자형'

}

function Result({ type }) {

  return (
    <div className="card">

      <h1>{type}</h1>

      <p>
        {descriptions[type]
          || '당신만의 특별한 개성을 가진 유형'}
      </p>

      <button onClick={() => window.location.reload()}>
        다시하기
      </button>

    </div>
  )
}

export default Result
