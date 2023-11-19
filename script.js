function playGame(playerChoice) {
    var choices = ["rock", "paper", "scissors"];
    var results = ""; // To store the results for all rounds

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

        // Store each round's result separately
        results += "Round " + (i + 1) + ": You chose " + playerChoice + ". The computer chose " + computerChoice + ". " + result + "<br>";
    }

    document.getElementById("result").innerHTML = results; // Display all three rounds' results
}
