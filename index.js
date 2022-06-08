var randomNumber1 = Math.ceil(Math.random() * 6);
var randomNumber2 = Math.ceil(Math.random() * 6);

if (randomNumber1 === 6) {
  document.querySelectorAll("img")[0].setAttribute("src", "images/dice6.png");
} else if (randomNumber1 === 5) {
    document.querySelectorAll("img")[0].setAttribute("src", "images/dice5.png");
} else if (randomNumber1 === 4) {
    document.querySelectorAll("img")[0].setAttribute("src", "images/dice4.png");
} else if (randomNumber1 === 3) {
    document.querySelectorAll("img")[0].setAttribute("src", "images/dice3.png");
} else if (randomNumber1 === 2) {
    document.querySelectorAll("img")[0].setAttribute("src", "images/dice2.png");
} else if (randomNumber1 === 1) {
    document.querySelectorAll("img")[0].setAttribute("src", "images/dice1.png");
}

if (randomNumber2 === 6) {
  document.querySelectorAll("img")[1].setAttribute("src", "images/dice6.png");
} else if (randomNumber1 === 5) {
    document.querySelectorAll("img")[1].setAttribute("src", "images/dice5.png");
} else if (randomNumber1 === 4) {
    document.querySelectorAll("img")[1].setAttribute("src", "images/dice4.png");
} else if (randomNumber1 === 3) {
    document.querySelectorAll("img")[1].setAttribute("src", "images/dice3.png");
} else if (randomNumber1 === 2) {
    document.querySelectorAll("img")[1].setAttribute("src", "images/dice2.png");
} else if (randomNumber1 === 1) {
    document.querySelectorAll("img")[1].setAttribute("src", "images/dice1.png");
}

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
}
  else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
  }
  else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw!";
  }
