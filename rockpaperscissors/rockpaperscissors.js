
let playerScore = 0
let computerScore = 0
let scoreBoard = 0;

function generateMove() {
    const selection = ["ROCK", "PAPER", "SCISSORS"]
    let choice = selection[Math.floor(Math.random() * 3)]
    return choice
}

function playRound(playerSelection, computerSelection) {


    const player = playerSelection.toUpperCase()

    console.log(player, computerSelection)

    if ((player === "ROCK" && computerSelection === "PAPER") || (player === "PAPER" && computerSelection === "SCISSORS") || (player === "SCISSORS" && computerSelection === "ROCK")) {

        computerScore++
        return "You Lose!"

    } else if (player === computerSelection) {
        return "You Tied!"
    } else {
        playerScore++
        return "You Win!"
    }
}

function checkScore(playerScore, computerScore) {
    if(playerScore<=5 || computerScore <= 5) {
        return true
    } 
    return false
}

function game() {

    let scoreLimit = 5
    let playerScoreboard = 0
    let computerScoreboard = 0
    const playerSelection = generateMove()
    const computerSelection = generateMove()

    while (checkScore(playerScoreboard, computerScoreboard)){
        if(playRound(playerSelection, computerSelection) === "You Lose!") {
            computerScoreboard++
        } else if(playRound(playerSelection, computerSelection) === "You Win!") {
            playerScoreboard++
        }
    }
}


game()