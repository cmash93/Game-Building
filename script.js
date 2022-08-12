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

    var compSelection = Math.floor(Math.random() * options.length);
    var compMove = options[compSelection]
    window.alert(compMove);

    if 
    (userSelection === compMove) {
        window.alert("It's a tie!")
    }
    
    else if
    ((userSelection === "R" && compMove === "S") || (userSelection === "S" && compMove === "P") || (userSelection === "P" && compMove === "R")) {
        window.alert("You win!")
    }

    else
    (window.alert("You lose!"))
}


function playAgain() {
    window.confirm("Would you like to play again?")
}

playGame()