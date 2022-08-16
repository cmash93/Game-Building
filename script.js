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

    // write something where they have to choose something

    userSelection = userSelection.toUpperCase();

    
    var compSelection = Math.floor(Math.random() * options.length);
    var compMove = options[compSelection]
    window.alert("Computer chose " + compMove);

    if 
    (userSelection === compMove) {
        results.ties++;
        window.alert("It's a tie!")
    }
    
    else if
    ((userSelection === "R" && compMove === "S") || (userSelection === "S" && compMove === "P") || (userSelection === "P" && compMove === "R")) {
        results.wins++;
        window.alert("You win!")
    }

    else {
    window.alert("You lose!");
    results.losses++;
    }

    results.numGames++;
    window.alert("Results: " + " Wins: " + results.wins + " | Losses: " + results.losses + " | Ties: " + results.ties + " | Number of Games: " + results.numGames)

    var playAgain = window.confirm("Would you like to play again?")
    
    if (playAgain) {
        playGame()
    }


    
}



playGame()