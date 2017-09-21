'use strict';

// Begin the game!!!

var userName = prompt('Hi there! My name is Lotus. What is your name?');

alert('Hi, ' + userName + '! Let\'s play a series of guessing games! For the next five questions please guess YES or NO....');

// Question One - Trombone Question
var tromboneGuess = prompt('Question 1: Lotus can play the trombone? y/n').toLowerCase();
console.log('#1 - Trombone question answer is "n" or "no". ' + userName + ' entered ' + tromboneGuess);
// Trombone question responses to user
if (tromboneGuess === 'n' || tromboneGuess === 'no') {
  alert('You are correct! Lotus can\'t play the trombone although she (sort of) can play the clarinet.');
} else {
  alert('You are incorrect. Lotus is honored that you think so but unfortunately she does not play the trombone.');
}

// Question Two - Person Question
var personNameGuess = prompt('Question 2: Lotus has a person named Ducky. y/n').toLowerCase();
console.log('#2 - Person question answer is "n" or "no". ' + userName + ' entered ' + personNameGuess);
// Dog question responses to user
if (personNameGuess === 'no' || personNameGuess === 'n') {
  alert('Ah, yes! Good job, ' + userName + '! Lotus\'s person is named Birdie.');
} else {
  alert('So close, ' + userName + '! Lotus\'s person is named after a different animal. The birdie.');
}

// Question Three - Flight Question
var flightGuess = prompt('Question 3: Lotus can really fly? y/n').toLowerCase();
console.log('#3 - Flight question answer is "y" or "yes". ' + userName + ' entered ' + flightGuess);
// Flight question responses to user
if (flightGuess === 'y' || flightGuess === 'yes') {
  alert('Correct! Why not?!');
} else if (flightGuess === 'maybe') {
  alert('Heh exactly!');
}
else {
  alert('Sorry, wrong answer ' + userName + '. Lotus can indeed fly.');
}

// Question Four - Unicorn Question
var unicornGuess = prompt('Question 4: Lotus is part unicorn? y/n').toLowerCase();
console.log('#4 - Unicorn question answer is "n" or "n". ' + userName + ' entered ' + flightGuess);
// Unicorn question responses to user
if (unicornGuess === 'y' || unicornGuess === 'yes') {
  alert('Incorrect. Lotus is not part unicorn. But maybe... It was a good guess, ' + userName + '.');
} else {
  alert('Yeah, you are right ' + userName + '. It would be cool, though!');
}

// Question Five - Simulation Question
var simulationGuess = prompt('Question 5: We are all living in a simulation? y/n').toLowerCase();
console.log('#5 - Simulation question answer is "y" or "yes". ' + userName + ' entered ' + simulationGuess);
// Simulation question responses to user
if (simulationGuess === 'n' || simulationGuess === 'no') {
  alert('Hmmmm... ' + userName + '. I have no idea but it is very interesting that you think not.');
} else {
  alert('Whoa, cool! Thanks for the heads up ' + userName + '.');
}

// Question Six - Dexterity Question (Number guessing game)
alert('Ok ' + userName + '... now we are going to mix it up! In the next game, we\'ll roll a D20 to do a dexterity check on you. \n\nI\'ll roll the D20 behind the computer so you can\'t see. I need you to guess your level (random number between 1 and 20) in FOUR tries or less so we can win!! I know you can do it!');
var userDexterityRoll = Math.floor(Math.random() * 20) + 1;
console.log('#6 - Dexterity number guessing game. Number rolled is ' + userDexterityRoll);
var tries = 3;
while (true) {
  var userGuessedRoll = Number(prompt(userName + ', what is your guess (between 1 - 20)? *fingers crossed*'));
  console.log(userName + ' guessed ' + userGuessedRoll)
  if (userGuessedRoll === userDexterityRoll) {
    alert('OMG we did it! Thank you ' + userName + '!\nWe can now move on to the next game!!!');
    break;
  } else if (tries === 0) {
      alert('Whomp whomp... better luck next time. Your dexterity is ' + userDexterityRoll + '. So close!');
      break;
  } else if (tries === 1 && userGuessedRoll > userDexterityRoll) {
      alert('Oh no! ' + userGuessedRoll + '! ' + userGuessedRoll + ' is too high! Please try again.. We only have one guess left!');
      tries--;
  } else if (tries === 1 && userGuessedRoll < userDexterityRoll) {
      alert('Oh no! ' + userGuessedRoll + '! ' + userGuessedRoll + ' is too low! Please try again.. We only have one guess left!');
      tries--;
  } else if (userGuessedRoll > userDexterityRoll) {
      alert('Oh no! ' + userName + '! ' + userGuessedRoll + ' is too high! Please try again.. We only have ' + tries + ' guess left!');
      tries--;
      }
    else if (userGuessedRoll < userDexterityRoll) {
      alert('Oh no! ' + userName + '! ' + userGuessedRoll + ' is too low! Please try again.. We only have ' + tries + ' guess left!');
      tries--;
    }
  }

  // As a developer, I want to add a seventh question to my guessing game that has multiple possible correct answers that are stored in an array. For instance, "Can you guess a state that I have lived in besides Washington?", so that even more of my programming skills are showcased. For now, I will structure this question so that the user has six tries to get a single correct answer, and upon using up those tries OR getting a correct answer, displays a message to the user indicating all of the possible correct answers.
// As a developer, I want to keep a tally of the total number of correct answers given by the user, and at the end of the game, tell the user how well they did with a personalized custom message that includes the number of correct answers and also addresses the user by name, e.g. "You got 4 out of 7 questions correct, Bobbi! Better luck next time."


alert('Alright, on to the next game! In this game, you need to guess Lotus\' favorite animals. ')


// alert(userGuessedRoll);

// Nice goodbye
alert(userName + '! That was so fun! I hope you enjoyed playing! Have a wonderful day!');
