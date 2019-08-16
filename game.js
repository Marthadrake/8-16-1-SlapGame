let game = {
  gamer: [{
    name: "Daredevil",
    type: "Cat",
    attcks: [{
      status: "playful",
      img: "http://www.streetcat.ca/wordpress/wp-content/uploads/2017/01/slider-2.jpg"
    },
    ],
    defense: [{
      status: "hiss",
      img: "https://www.catster.com/wp-content/uploads/2017/08/A-gray-kitten-hissing-and-looking-angry.jpg"
    },
    ],
  },
  {
    name: "Rose",
    type: "Skunk",
    attacks: [{
      status: "curious",
      img: "https://cdn-www.terminix.com/cs/terminix/image/skunk-in-yard-main.jpg"
    },
    ],
    defense: [{
      status: "stink",
      img: "https://i.pinimg.com/474x/19/13/c8/1913c8753508471d45d81cab49edec0a--skunk-smell-remover-skunk-removal.jpg"

    },
    ],

  }]
}



function update() {
  let typeElement = document.querySelector("#cat-name")

  let gamerAttacksStatus = document.querySelector("#cat-attacks-status")
  let gamerDefenseStatus = document.querySelector("#cat-defense-status")

  let gamerAttacksImage = document.querySelector("cat-attacks-image")
  let gamerDefenseImage = document.querySelector("cat-Defense-image")


  typeElement.textContent = 'cat.name'
  gamerAttacksImage.src = gamerAttacksImage
  gamerDefenseImage.src = cat.defense.img
  gamerAttacksStatus.textContent = cat.attacks.status
  gamerDefenseStatus.textContent = cat.defense.status


}
