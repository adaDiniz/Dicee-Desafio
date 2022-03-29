  
  
  var randomDiceImage = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];  
  var randomNumber1 = Math.floor(Math.random()*randomDiceImage.length);
  var randomNumber2 = Math.floor(Math.random()*randomDiceImage.length);
  var diceEscolhido1 = randomDiceImage[randomNumber1];
  var diceEscolhido2 = randomDiceImage[randomNumber2];
  

document.querySelector(".img1").setAttribute("src", diceEscolhido1);

document.querySelector(".img2").setAttribute("src", diceEscolhido2);


var nome1 = prompt("Qual é o seu nome Player 1: ");

var nome2 = prompt("Qual é o seu nome Player 2: ");

if (diceEscolhido1 > diceEscolhido2) {
  document.querySelector("h1").textContent = nome1 + " won!!!";
  } else if (diceEscolhido1 < diceEscolhido2){
    document.querySelector("h1").textContent = nome2 + " won!!!"
  } else {
    document.querySelector("h1").textContent = "A tie...."
  } 