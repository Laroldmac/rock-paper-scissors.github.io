function playGame(playerChoice) {
    var choices = ["rock", "paper", "scissors"];
    var result = "";

    for (var i = 0; i < 3; i++) {
        var computerChoice = choices[Math.floor(Math.random() * 3)];

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
    document.getElementById("result").innerHTML = "You chose " + playerChoice + ". The computer chose " + computerChoice + ". " + result;
}
}
