var randomNumber = 1;
var diceImage = "images/dice";
var diceImageFull;
var randOne;
var randTwo;


function generateRandomNum(){
  randomNumber = Math.floor(Math.random()*6+1);
  diceImageFull = diceImage + randomNumber + ".png";
}

generateRandomNum();
document.querySelector(".img1").setAttribute("src", diceImageFull);
randOne=randomNumber;
generateRandomNum();
document.querySelector(".img2").setAttribute("src", diceImageFull);
randTwo=randomNumber;

if (randOne>randTwo) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!"
} else if (randTwo > randOne) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!"
} else {
  document.querySelector("h1").innerHTML = "Draw!"
}
