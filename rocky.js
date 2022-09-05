let playerScoreArray = []
let computerScoreArray = []



const btn = document.querySelectorAll('.btn');
const compOptions = ['Rock', 'Paper', 'Scissors']

  btn.forEach(btn => btn.addEventListener('click', event => {
   
    let compChoice = compOptions[Math.floor(Math.random()*compOptions.length)]; {
        if (playerScoreArray.length < 10 && computerScoreArray.length < 10) {
            if (this.id  == 'Rock') {
                if(compChoice == 'Rock') {
                    document.getElementById('computerChoice').textContent = "Computer chose rock, it is a tie!"
                } else if (compChoice == 'Paper') {
                    document.getElementById('computerChoice').textContent = 'Computer chose paper, you lose!'
                    computerScoreArray.push(1)
                } else {
                    document.getElementById('computerChoice').textContent = 'Computer chose scissors, you win!'
                    playerScoreArray.push(1)
                }
            } else if (this.id == 'Paper') {
                if (compChoice == 'Rock') {
                    document.getElementById('computerChoice').textContent = 'Computer chose rock, you win!'
                    playerScoreArray.push(1)
                } else if (compChoice == 'Paper') {
                    document.getElementById('computerChoice').textContent = 'Computer chose paper, it is a tie!'
                } else {
                    document.getElementById('computerChoice').textContent = 'Computer chose scissors, you lose!'
                    computerScoreArray.push(1)
                }
            } else {
                if (compChoice == 'Rock') {
                    document.getElementById('computerChoice').textContent = 'Computer chose rock, you lose!'
                    computerScoreArray.push(1)
                } else if (compChoice == 'Paper') {
                    document.getElementById('computerChoice').textContent = 'Computer chose paper, you win!'
                    playerScoreArray.push(1)
                } else {
                    document.getElementById('computerChoice').textContent = 'Computer chose scissors, it is a tie!'
                }
            }
            playerScore = function() {
                let count = 0;
                for(let i = 0, n = playerScoreArray.length; i < n; i++) {
                    count += playerScoreArray[i];
                    }
                return count;
                
            }
            document.getElementById('playerScore').textContent = playerScore();
            computerScore = function() {
                let count = 0;
                for(let i = 0, n = computerScoreArray.length; i < n; i++) {
                    count += computerScoreArray[i];
                    }
                return count;
            }
            document.getElementById('computerScore').textContent = computerScore();
    } else {
        if(Number(playerScoreArray.length) > Number(computerScoreArray.length)) {
        document.getElementById('gameOver').textContent = "Game Over! You won!"
        } else {
        document.getElementById('gameOver').textContent = "Game Over! You lost!"
        }
    } 

}}))

