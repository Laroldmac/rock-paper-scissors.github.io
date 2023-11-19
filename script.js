var roundsPlayed = 0;
var playerChoices = [];

function playGame(playerChoice) {
    var choices = ["rock", "paper", "scissors"];
    var results = ""; // To store the results for all rounds

    if (roundsPlayed < 3 && !playerChoices.includes(playerChoice)) {
        playerChoices.push(playerChoice);
        roundsPlayed++;

        for (var i = 0; i < 3; i++) {
            var computerChoice = choices[Math.floor(Math.random() * 3)];
            var result = "";

            if (playerChoices[i] === computerChoice) {
                result = "It's a tie!";
            } else if (
                (playerChoices[i] === "rock" && computerChoice === "scissors") ||
                (playerChoices[i] === "paper" && computerChoice === "rock") ||
                (playerChoices[i] === "scissors" && computerChoice === "paper")
            ) {
                result = "You win!";
            } else {
                result = "You lose!";
            }

            // Store each round's result separately
            results += "Round " + (i + 1) + ": You chose " + playerChoices[i] + ". The computer chose " + computerChoice + ". " + result + "<br>";
        }

        // Display all three rounds' results only after three rounds
        if (roundsPlayed === 3) {
            document.getElementById("result").innerHTML = results;

            // Disable buttons after three rounds
            document.getElementById("rockBtn").disabled = true;
            document.getElementById("paperBtn").disabled = true;
            document.getElementById("scissorsBtn").disabled = true;
        }
    }
}
