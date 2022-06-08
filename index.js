var randomNumber1 = Math.ceil(Math.random() * 6);
var randomNumber2 = Math.ceil(Math.random() * 6);

const images = document.querySelectorAll("img")
const dice1  = images[0]
const dice2  = images[1]

dice1.setAttribute('src', `images/dice${randomNumber1}.png`)
dice2.setAttribute('src', `images/dice${randomNumber2}.png`)

const h1 = document.querySelector("h1")

if (randomNumber1 > randomNumber2) {
  h1.innerHTML = "🚩Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  h1.innerHTML = "Player 2 Wins!🚩";
}
else if (randomNumber1 === randomNumber2) {
  h1.innerHTML = "Draw!";
}
