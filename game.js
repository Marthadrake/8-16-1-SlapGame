
let gamerOne = 0,








  let game = {
    health_div: 99,
    attacks_div: [{
      hit_id: 5,
      kick_id: 10,
      slap_id: 3,
    }],

  }

function attacks(times) {
  if (game.health < 99) {
    gamer.health += times
    draw()
  }
}