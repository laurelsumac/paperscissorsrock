let playerScoreArray = []
let computerScoreArray = []

const rock = document.getElementById("rock");
    rock.addEventListener("click", function() {
        document.getElementById("playerChoice").textContent = "Rock";
        let compChoice = (Math.floor(Math.random() * 3) + 1);
        if (compChoice == 1) {
            document.getElementById('computerChoice').textContent = "Computer chose rock, it is a tie!"
        } else if (compChoice == 2) {
            document.getElementById('computerChoice').textContent = 'Computer chose paper, you lose!'
            computerScoreArray.push(1)
        } else {
            document.getElementById('computerChoice').textContent = 'Computer chose scissors, you win!'
            playerScoreArray.push(1)
        }
})

const paper = document.getElementById("paper");
    paper.addEventListener("click", function() {
        document.getElementById("playerChoice").textContent = "Paper";
        let compChoice = (Math.floor(Math.random() * 3) + 1);
        if (compChoice == 1) {
            document.getElementById('computerChoice').textContent = 'Computer chose rock, you win!'
            playerScoreArray.push(1)
        } else if (compChoice == 2) {
            document.getElementById('computerChoice').textContent = 'Computer chose paper, it is a tie!'
        } else {
            document.getElementById('computerChoice').textContent = 'Computer chose scissors, you lose!'
            computerScoreArray.push(1)
        }
})

const scissors = document.getElementById("scissors");
    scissors.addEventListener("click", function() {
        document.getElementById("playerChoice").textContent = "Scissors";
        let compChoice = (Math.floor(Math.random() * 3) + 1);
        if (compChoice == 1) {
            document.getElementById('computerChoice').textContent = 'Computer chose rock, you lose!'
            computerScoreArray.push(1)
        } else if (compChoice == 2) {
            document.getElementById('computerChoice').textContent = 'Computer chose paper, you win!'
            playerScoreArray.push(1)
        } else {
            document.getElementById('computerChoice').textContent = 'Computer chose scissors, it is a tie!'
        }
})

playerScore = document.getElementById("playerScore");
   function() {
        let count = 0;
        for(let i = 0, n = playerScoreArray.length; i < n; i++) {
            count += playerScoreArray[i];
            }
        return count;
}
    

computerScore = function() {
    let count = 0;
    for(let i = 0, n = computerScoreArray.length; i < n; i++) {
        count += computerScoreArray[i];
        }
    return count;
}