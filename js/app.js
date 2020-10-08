"use strict";

//Starting prompt asks what the site visitors name is.
var name1 = prompt("What is your name?");
alert("Welcome to my About me page " + name1 + "! Let's play a game!");


function numberGame() {

var tries1 = 0;
var rannum1 = Math.floor(Math.random() * 10 + 1);
console.log(rannum1);
var guess1;

while (tries1 <= 3 && guess1 != rannum1) {
  guess1 = parseInt(prompt("Alright " + name1 + " guess a number 1-10"));

  if (guess1 < rannum1) {
    alert("Your guess was to low!");
    tries1++;
    // console.log('tries amount ' + tries)
  } else if (guess1 > rannum1) {
    alert("Your guess was to high!");
    tries1++;
    // console.log('tries amount ' + tries)
  }
}
if (rannum1 === guess1) {
  alert("You Win!!!");
  pointcounter++;
} else {
  alert("You Lose...");
}
}
numberGame();

// console.log(guess1);





// var 7th Question

function movieGuessing() {
var correctAnswers = ["horror", "comedy", "romance", "action", "drama"];
var guessAnswer = prompt("What types of movies do you think?");
var attemptsRemaining = 6;
var answeredCorrectly = false;
while (attemptsRemaining > 0 && !answeredCorrectly) {
  attemptsRemaining--;
  for (var i = 0; i < correctAnswers.length; i++) {
    if (guessAnswer === correctAnswers[i]) {
      answeredCorrectly = true;
      alert(`Yeah! ${guessAnswer} is one of the types of movies I watch!`);
      pointcounter++;
    }
  }
  if (attemptsRemaining > 0 && !answeredCorrectly) {
    guessAnswer = prompt(
      "Sorry that wasn't a correct answer please try again!"
    );
  }
  if (attemptsRemaining === 0 && !answeredCorrectly) {
    alert("Sorry you lose!");
  }
}
}
movieGuessing();
alert(`You got ${pointcounter} questions correct!`);