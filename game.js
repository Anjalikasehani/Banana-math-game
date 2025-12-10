 console.log("game.js loaded");
 
 
let correctAnswer = null;
let score = 0;
let level = 1;

let timer= null;
let timeLeft = 0;

//load first question

window.onload =() => {
  loadBananaQuestion();

  document.getElementById("username").innerText = data.username;
  document.getElementById("score").innerText = data.score;
  document.getElementById("level").innerText = data.level;
  
  score = Number(sessionStorage.getItem("score")) || 0;
  level = Number(sessionStorage.getItem("level")) || 1;

 

    loadBananaQuestion();
}
//start countdown timer
function startTimer(){
  timeLeft=20 + (level - 1)*5;
  document.getElementById("timeLeft").innerText = timeLeft;

  clearInterval(timer);

  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("timeLeft").innerText = timeLeft;

    if(timeLeft <= 0){
      clearInterval(timer);
      alert("Time's up!");
      document.getElementById("submitBtn").style.display = "none";
      document.getElementById("nextBtn").style.display = "inline-block";
      
    }

    
  },1000);
}
//load question from Banana API
async function loadBananaQuestion() {
   console.log("Loading Game..");

   startTimer();

   const img = document.getElementById("questionImage");
   img.src = "";
  try {
    const response = await fetch("https://marcconrad.com/uob/banana/api.php");
    const data = await response.json();

    
    if (data.question) {
        img.src = data.question;
        correctAnswer = Number(data.solution);
        
    }

    //reset buttons
     document.getElementById("submitBtn").style.display = "inline-block";
    document.getElementById("nextBtn").style.display = "none";
    document.getElementById("answerInput").value = "";
    
  } catch (error) {
    
    alert("Try Again");
  }
}
//submit answer
document.getElementById("submitBtn").addEventListener("click", () => {
 
  const userAns =Number(document.getElementById("answerInput").value);
  
  if(userAns === correctAnswer) {
    alert("Correct!");
    score++;
    document.getElementById("score").innerText = score;

   sessionStorage.setItem("score", score);

   if(score % 5 === 0){
    level++;
    document.getElementById("level").innerText = level;
    sessionStorage.setItem("level", level);
    alert("Level up!");
   }
   loadBananaQuestion();
  }else{
    alert("Wrong!Correct answer is:" + correctAnswer);
  }
 
});
//next question
document.getElementById("nextBtn").addEventListener("click", () => {

 
    loadBananaQuestion();
});
