 console.log("game.js loaded");
 
 
let correctAnswer = null;
let score = 0;

//load first question

window.onload =() => {
    loadBananaQuestion();
}
//load question from Banana API
async function loadBananaQuestion() {
   console.log("Loading Game..");

   const img = document.getElementById("questionImage");
   img.src = "";
  try {
    const response = await fetch("https://marcconrad.com/uob/banana/api.php");
    const data = await response.json();

    console.log("Game data:", data);
    if (data.question) {
        img.src = data.question;
        correctAnswer = parseInt(data.solution);
        console.log("Correct answer: ", correctAnswer);
    }else{
        console.error("No question found in API");
    }

    //reset buttons
     document.getElementById("submitBtn").style.display = "inline-block";
    document.getElementById("nextBtn").style.display = "none";
    document.getElementById("answerInput").value = "";
    
  } catch (err) {
    console.error("Fetch error:");
    alert("Try Again");
  }
}
//submit answer
document.getElementById("submitBtn").addEventListener("click", () => {
  const userAns = parseInt(document.getElementById("answerInput").value);
  if (isNaN(userAns)) {
    alert("Please enter a valid number");
    return;
    
  } 
  if(userAns === correctAnswer) {
    alert("Correct!");
    score++;
    document.getElementById("score").innerText = score;
  }else{
    alert("Wrong!Correct answer is:" + correctAnswer);
  }
  //hide submit and show next
  document.getElementById("submitBtn").style.display ="none";
  document.getElementById("nextBtn").style.display = "inline-block";
 
});
//next question
document.getElementById("nextBtn").addEventListener("click", () => {
    loadBananaQuestion();
})
//system update