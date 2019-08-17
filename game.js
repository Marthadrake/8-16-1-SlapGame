let gamerOne = 0;
let gamerTwo = 0;

let gamerOnehealth_span = document.getElementById("gamerOne-health");
let gamerTwohealth_span = document.getElementById("gamerTwo-health");

let cardBody_div = document.querySelector(".card-body");
let results_div = document.querySelector(".results");

let hit_div = document.getElementById("hit");
let kick_div = document.getElementById("kick")
let slap_div = document.getElementById("slap")

hit_div.addEventListener('click', function () {
  console.log("hey you clicked on hit");
})

kick_div.addEventListener('click', function () {
  console.log("hey you clicked on kick");
})

slap_div.addEventListener('click', function () {
  console.log("hey you clicked on slap");
})