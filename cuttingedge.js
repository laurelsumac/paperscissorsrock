



function getComputerChoice(p1, p2) {
    let compChoice = (Math.floor(Math.random() * 3) + 1);

    if (compChoice == 1) {
        return 'Rock'
    } else if (compChoice == 2) {
        return 'Paper'
    } else {
        return 'Scissors'
    }
}

document.getElementById("demo").innerHTML = getComputerChoice();