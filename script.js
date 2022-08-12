var options = ["R", "P", "S"]

var results = {
    wins: 0,
    losses: 0,
    ties: 0,
    numGames: 0,
}

function playGame() {
    var userSelection = window.prompt("Please enter R[🪨], P[📃], or S[✂️].");
    window.alert("User chose " + userSelection);
}


function playAgain() {
    window.confirm("Would you like to play again?")
}

playGame()