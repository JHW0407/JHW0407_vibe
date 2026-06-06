const questions = [
  {
    question:"사람들과 함께 있으면 에너지가 생긴다",
    type:"E"
  },
  {
    question:"새로운 아이디어를 상상하는 걸 좋아한다",
    type:"N"
  },
  {
    question:"결정을 내릴 때 논리를 더 중요하게 생각한다",
    type:"T"
  },
  {
    question:"계획을 세우면 마음이 편하다",
    type:"J"
  },
  {
    question:"혼자만의 시간이 꼭 필요하다",
    type:"I"
  },
  {
    question:"현실적인 정보가 더 중요하다",
    type:"S"
  },
  {
    question:"공감 능력이 중요하다고 생각한다",
    type:"F"
  },
  {
    question:"즉흥적인 행동을 좋아한다",
    type:"P"
  },
  {
    question:"처음 보는 사람과도 쉽게 대화한다",
    type:"E"
  },
  {
    question:"미래를 상상하는 일이 즐겁다",
    type:"N"
  },
  {
    question:"감정보다 사실이 우선이다",
    type:"T"
  },
  {
    question:"일정을 미리 정리하는 편이다",
    type:"J"
  }
];

let current = 0;

let scores = {
  E:0,
  I:0,
  S:0,
  N:0,
  T:0,
  F:0,
  J:0,
  P:0
};

function startTest(){
  document.getElementById("start-screen").classList.add("hidden");
  document.getElementById("question-screen").classList.remove("hidden");

  showQuestion();
}

function showQuestion(){

  let q = questions[current];

  document.getElementById("question").innerText =
    q.question;

  let progress =
    ((current)/questions.length)*100;

  document.getElementById("progress-bar").style.width =
    progress + "%";
}

function answer(choice){

  let type = questions[current].type;

  if(choice==="A"){
    scores[type]+=3;
  }
  else if(choice==="B"){
    scores[type]+=2;
  }
  else if(choice==="C"){
    scores[type]+=1;
  }

  current++;

  if(current < questions.length){
    showQuestion();
  }
  else{
    showResult();
  }
}

function showResult(){

  document.getElementById("question-screen")
    .classList.add("hidden");

  document.getElementById("result-screen")
    .classList.remove("hidden");

  let result = "";

  result += scores.E >= scores.I ? "E":"I";
  result += scores.S >= scores.N ? "S":"N";
  result += scores.T >= scores.F ? "T":"F";
  result += scores.J >= scores.P ? "J":"P";

  document.getElementById("result-type")
    .innerText = result;

  const descriptions = {

    INTJ:"전략적이고 독립적인 사색가 유형입니다.",
    INFP:"감성적이고 이상을 추구하는 몽상가입니다.",
    ENFP:"열정적이고 자유로운 분위기 메이커입니다.",
    ESTJ:"체계적이고 리더십이 강한 관리자형입니다."
  };

  document.getElementById("result-desc")
    .innerText =
      descriptions[result]
      || "당신만의 독특한 매력을 가진 유형입니다.";
}
