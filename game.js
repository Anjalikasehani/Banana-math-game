 console.log("game.js loaded");
 
 
let correctAnswer = null;
let score = 0;
let level = 1;

let timer = null;
let timeLeft = 0;


window.onload = () => {
  score = Number(window.currentScore || 0);
  level = Number(window.currentLevel || 1);

  
 
  document.getElementById("score").innerText = score;
  document.getElementById("level").innerText = level;
 
  creatNumberButtons();
  loadBananaQuestion();
}

function creatNumberButtons(){
  let container = document.getElementById("numberButtons");
  container.innerHTML = "";

  for(let i = 0; i <=9; i++){
    let btn = document.createElement("button");
    btn.innerText = i;
    btn.addEventListener("click",() => handleAnswer(i));
    container.appendChild(btn);
  }
}
//start countdown timer
function startTimer(){
  timeLeft=60 + (level - 1)*5;
  document.getElementById("timeLeft").innerText = timeLeft;

  clearInterval(timer);

  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("timeLeft").innerText = timeLeft;

    if(timeLeft <= 0){
      clearInterval(timer);
      alert("Time's up!");
      
      document.getElementById("nextBtn").style.display = "inline-block";
      
    }

    
  },1000);
}
//load question from Banana API
async function loadBananaQuestion() {
  

   startTimer();

   const img = document.getElementById("questionImage");
   img.src = "";
   
try{
    const response = await fetch("https://marcconrad.com/uob/banana/api.php");
    const data = await response.json();

    
  
        img.src = data.question;
        correctAnswer = Number(data.solution);
        console.log("correct answer", correctAnswer);
} catch (e){
  alert("Error!Try again");
  return;
}
   
 
    document.getElementById("nextBtn").style.display = "none";
    
}

function handleAnswer(userAns){
  clearInterval(timer);

//submit answer

  if(userAns === correctAnswer){
    alert("correct");
    score++;
    document.getElementById("score").innerText = score;

    if(score >= 5){
      score = 0;
      level++;
       alert("Level up!");
      document.getElementById("level").innerText = level;
     
    }

  }else{
    alert("Incorrect!correct answer was:" + correctAnswer);
    score = Math.max(0,score - 1);
    document.getElementById("score").innerText = score;
  }
  
  document.getElementById("nextBtn").style.display = "inline-block";
}
  

//next question
document.getElementById("nextBtn").addEventListener("click", () => {

 
    loadBananaQuestion();
});
