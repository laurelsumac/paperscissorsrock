const rock = document.getElementById("rock");
    rock.addEventListener("click", function() {
        document.getElementById("playerChoice").textContent = "Rock";
        let compChoice = (Math.floor(Math.random() * 3) + 1);

        if (compChoice == 1) {
            document.getElementById('computerChoice').textContent = 'Rock'
        } else if (compChoice == 2) {
            document.getElementById('computerChoice').textContent = 'Paper'
        } else {
            document.getElementById('computerChoice').textContent = 'Scissors'
        }

})

const paper = document.getElementById("paper");
    paper.addEventListener("click", function() {
        document.getElementById("playerChoice").textContent = "Paper";
        let compChoice = (Math.floor(Math.random() * 3) + 1);

        if (compChoice == 1) {
            document.getElementById('computerChoice').textContent = 'Rock'
        } else if (compChoice == 2) {
            document.getElementById('computerChoice').textContent = 'Paper'
        } else {
            document.getElementById('computerChoice').textContent = 'Scissors'
        }

})

const scissors = document.getElementById("scissors");
    scissors.addEventListener("click", function() {
        document.getElementById("playerChoice").textContent = "Scissors";
        let compChoice = (Math.floor(Math.random() * 3) + 1);
        if (compChoice == 1) {
            document.getElementById('computerChoice').textContent = 'Rock'
        } else if (compChoice == 2) {
            document.getElementById('computerChoice').textContent = 'Paper'
        } else {
            document.getElementById('computerChoice').textContent = 'Scissors'
        }

})

// on click of one of the buttons, generate computer choice:
function getComputerChoice() {

}

document.getElementById("computerChoice").innerHTML = getComputerChoice();