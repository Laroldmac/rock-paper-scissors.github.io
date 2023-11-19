function playGame(playerChoice) {
    var choices = ["rock", "paper", "scissors"];

    for (var i = 0; i < 3; i++) {
        var computerChoice = choices[Math.floor(Math.random() * 3)];
        var result = "";

        if (playerChoice === computerChoice) {
            result = "It's a tie!";
        } else if (
            (playerChoice === "rock" && computerChoice === "scissors") ||
            (playerChoice === "paper" && computerChoice === "rock") ||
            (playerChoice === "scissors" && computerChoice === "paper")
        ) {
            result = "You win!";
        } else {
            result = "You lose!";
        }

        // Display each round's result separately
        document.getElementById("result").innerHTML += "Round " + (i + 1) + ": You chose " + playerChoice + ". The computer chose " + computerChoice + ". " + result + "<br>";
    }
}
