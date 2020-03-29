let choice;
let gameChoice;
let playerScore = 0,
  gameScore = 0;
let result;

function clean() {
  tab = ["ROCK", "PAPER", "SCISSORS"];

  tab.forEach(element => {
    $("#" + element).removeClass(["winner", "loser"]);
    $("#square_game").removeClass(["winner", "loser"]);
  });
}

function losowanie() {
  let los = Math.floor(Math.random() * 3);

  if (los === 0) gameChoice = "ROCK";
  else if (los === 1) gameChoice = "PAPER";
  else if (los === 2) gameChoice = "SCISSORS";
  else gameChoice = "ERROR";
}

$(".square_choice").click(function() {
  choice = $(this).attr("id");
  game(choice);
});

function game(choice) {
  clean();
  losowanie();
  $("#square_game").html("The computer chose: <br>" + gameChoice);

  if (choice === gameChoice) {
    result = "DRAW";
  } else {
    if (
      (choice === "ROCK" && gameChoice === "SCISSORS") ||
      (choice === "PAPER" && gameChoice === "ROCK") ||
      (choice === "SCISSORS" && gameChoice === "PAPER")
    ) {
      result = "YOU WON";
      playerScore++;
      $("#" + choice).addClass("winner");
      $("#square_game").addClass("loser");
    } else {
      result = "YOU LOST";
      gameScore++;
      $("#" + choice).addClass("loser");
      $("#square_game").addClass("winner");
    }
  }

  $("#square_score").html(
    result + "  |  Player: " + playerScore + "  |  Computer: " + gameScore
  );
}
