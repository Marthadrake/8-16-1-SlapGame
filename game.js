let gamerOne = 0;
let gamerTwo = 0;

let gamerOnehealth_span = document.getElementById("gamerOne-health");
let gamerTwohealth_span = document.getElementById("gamerTwo-health");

let cardBody_div = document.querySelector(".card-body");
let results_div = document.querySelector(".results");

let hit_div = document.getElementById("hit");
let kick_div = document.getElementById("kick")
let slap_div = document.getElementById("slap")

function getGamerTwoChoice() {
  let choices = ['hit', 'kick', 'slap'];
  let randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}


function game(gamerOneChoice) {
  let gamerTwoChoice = getGamerTwoChoice();
  switch (gamerOneChoice + gamerTwoChoice) {
    case "hitslap":
    case "slapkick":
    case "kickhits":
      console.log("user gamer 1 wins.");
      break;
    case "hitslap":
    case "slapkick":
    case "kickhits":
      console.log("user gamer 2 wins");
      break;
  }
}






function game(gamerOneChoice) {
  console.log("what you " + gamerOneChoice);

}

function main() {

  hit_div.addEventListener('click', function () {
    game("hit");
  })

  kick_div.addEventListener('click', function () {
    game("kick");
  })

  slap_div.addEventListener('click', function () {
    game("slap");
  })

}

main();
