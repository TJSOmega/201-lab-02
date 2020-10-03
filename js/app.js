// 'use strict';


// var name1 = prompt('What is your name?')
// alert('Welcome to my About me page ' + name1 + '! Let\'s play a game!')

// // Question 1
// var que1 = prompt("Was I raised in Texas?").toLowerCase()

// console.log(que1)

// if (que1 === 'yes' || que1 === 'y') {
//   // console.log('Maaaannn got the first question wrong? Not looking good for you so far!')
//   alert('Maaaannn got the first question wrong? Not looking good for you so far!')
//   console.log()
// }
// else if (que1 === 'no' || que1 === 'n'){
//    // console.log('Got the first question right, you\'re off to a good start!')
//   alert('Got the first question right, you\'re off to a good start!')
// }
// else {
//   alert('Invalid Response')
// }
// // Question 2
// var que2 = prompt("Have I always worked in the tech industry?").toLowerCase()

// console.log(que2)

// if (que2 === 'yes' || que2 === 'y') {
//   // console.log('Good job! Next Question!')
//   alert('Good job you! Next Question!')
// }
// else if (que1 === 'no' || que1 === 'n') {
//    // console.log('You are so wrong!')
//   alert('You are so wrong!')
// }
// else {
//   alert('Invalid Response')
// }

// // Question 3
// var que3 = prompt("I\'m a natural artist?").toLowerCase()

// console.log(que3)

// if (que3 === 'yes' || que3 === 'y') {
//   // console.log('Sorry you chose the wrong answer better luck next question!')
//   alert('Sorry you chose the wrong answer better luck next question!')
// }
// else if (que1 === 'no' || que1 === 'n') {
//   // console.log('Got this question correct hotshot! Nice job!')
//   alert('Got this question correct hotshot! Nice job!')
// }
// else {
//   alert('Invalid Response')
// }

// // Question 4
// var que4 = prompt('I\'ve gotten most of my coding knowledge from youtube and skillshare? ').toLowerCase()

// console.log(que4)

// if (que4 === 'yes' || que4 === 'y') {
//   // console.log('Wrooooonnnngggggg!')
//   alert('Wrooooonnnngggggg!')
// }
// else if (que1 === 'no' || que1 === 'n') {
//   // console.log('Good job!')
//   alert('Good job!')
// }
// else {
//   alert('Invalid Response')
// }

// // Question 5
// var que5 = prompt("My name is Terrence").toLowerCase()

// console.log(que5)

// if (que5 === 'yes' || que5 === 'y') {
//   // console.log('Thought I\'d give you a free one! :)')
//   alert('Thought I\'d give you a free one! :)')
// }
// else if (que1 === 'no' || que1 === 'n') {
//    // console.log('If you got this wrong we can\'t be friends...')
//   alert('If you got this wrong we can\'t be friends...')

// }
// else {
//   alert('Invalid Response')
// }



function Numbergame() {

  var tries = 0
  var winstat = false
var rannum1 = (Math.floor)(Math.random() * 10 + 1)
console.log(rannum1)

    var guess1
  while (tries <= 3 && guess1 !=rannum1) {
    guess1 = prompt('Please guess a number 1-10')

    if (guess1 <= rannum1 && guess1 != rannum1) {
      alert('Your guess was to low!')
      tries = (tries + 1)
      console.log('tries amount ' + tries)
    }
    else if (guess1 >= rannum1 && guess1 !=rannum1) {
      alert('Your guess was to high!')
      tries = (tries + 1)
      console.log('tries amount ' + tries)
    }
    }   
    if (rannum1 == guess1) {
      winstat = true
      alert('You Win!!!')
    }
    else {
      alert ('You Lose... Press the button to try again.')
    }
    }
    
