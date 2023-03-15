let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;
let buttons = document.querySelectorAll(".button");
const container = document.querySelector("#result-container");
const label = document.getElementById("score-label");
const box = document.querySelector(".box")
let round=0;

 function updateScores() {

    if (playerScore> computerScore){
    box.innerHTML=`<h2> You are the hero we were waiting for.</h2>
    <button onclick="location.reload()">Play again</button>`}
    else {
      box.innerHTML=`<h2>Oh no, Computers are destroying the world.</h2>
      <button onclick="location.reload()">Try again</button>`
    }
  
  }


buttons.forEach((button) => {
  button.addEventListener("click", () => {
   
    const img = document.querySelector("img");
    playerSelection = img.alt.toLowerCase();
    
    playRound(playerSelection, computerSelection);
    if (round>=5){
      updateScores();
    
    }
    
  });
});

const choices = ["rock", "paper", "scissors"];

function computerPlay() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  round +=1;
  computerSelection = computerPlay().toLowerCase();
  if (
    (computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "scissors" && playerSelection == "paper") ||
    (computerSelection == "paper" && playerSelection == "rock")
  ) {
    computerScore += 1;

    cpuScore();
  } else if (computerSelection === playerSelection) {
    container.textContent = "IT's A TIE!";
  } else {
    playerScore += 1;
    plrScore();
  }
  
  
  console.log(round)
}

function cpuScore() {
  let computerScoreBox = document.querySelector("#computer-score");
  computerScoreBox.textContent = computerScore;
  container.textContent = "COMPUTER WINS!";
  
}

function plrScore() {
  let playerScoreBox = document.querySelector("#player-score");
  playerScoreBox.textContent = playerScore;
  container.textContent = "YOU WIN!";
}





