"use strict";

//Starting prompt asks what the site visitors name is.
var name1 = prompt("What is your name?");
alert("Welcome to my About me page " + name1 + "! Let's play a game!");

// For counting the correct answers
var pointcounter = 0;

// Question 1
function questionOne(); {
  var que1 = prompt("Was I raised in Texas?").toLowerCase();

  console.log(que1);

  if (que1 === "yes" || que1 === "y") {
   
    alert(
      "Maaaannn got the first question wrong? Not looking good for you so far!"
    );
    console.log();
  } else if (que1 === "no" || que1 === "n") {
    
    alert("Got the first question right, you're off to a good start!");
    pointcounter++;
  } else {
    alert("Invalid Response");
  }
}
questionOne();

// Question 2
function questionTwo() {
  var que2 = prompt("Have I always worked in the tech industry?").toLowerCase();

  console.log(que2);

  if (que2 === "yes" || que2 === "y") {
    
    alert("Good job you! Next Question!");
    pointcounter++;
  } else if (que1 === "no" || que1 === "n") {
    
    alert("You are so wrong!");
  } else {
    alert("Invalid Response");
  }
}
questionTwo();

// Question 3

function questionThree() {
  var que3 = prompt("I'm a natural artist?").toLowerCase();

  console.log(que3);

  if (que3 === "yes" || que3 === "y") {
    
    alert("Sorry you chose the wrong answer better luck next question!");
  } else if (que1 === "no" || que1 === "n") {
    
    alert("Got this question correct hotshot! Nice job!");
    pointcounter++;
  } else {
    alert("Invalid Response");
  }
}
questionThree();

// Question 4

function questionFour() {
  var que4 = prompt(
    "I've gotten most of my coding knowledge from youtube and skillshare? "
  ).toLowerCase();

  console.log(que4);

  if (que4 === "yes" || que4 === "y") {
    
    alert("Wrooooonnnngggggg!");
  } else if (que1 === "no" || que1 === "n") {
   
    alert("Good job!");
    pointcounter++;
  } else {
    alert("Invalid Response");
  }
}
questionFour();

// Question 5

function questionFive() {
  var que5 = prompt("My name is Terrence").toLowerCase();

  console.log(que5);

  if (que5 === "yes" || que5 === "y") {
    
    alert("Thought I'd give you a free one! :)");
    pointcounter++;
  } else if (que1 === "no" || que1 === "n") {
    
    alert("If you got this wrong we can't be friends...");
  } else {
    alert("Invalid Response");
  }
}
questionFive();

// Template literal here, allows for you to use back ticks to create a string with auto concatenation
alert(`Good job ${name1} time to play game #2!`);

// Random Number generator game 1-10, function and called by button on HTML page.

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
      
    } else if (guess1 > rannum1) {
      alert("Your guess was to high!");
      tries1++;
      
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