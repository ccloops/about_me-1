'use strict';

// Begin the game!!!

var userName = prompt('Hi there! My name is Birdie. What is your name?');

alert('Hi, ' + userName + '! Let\'s play a guessing game! Please guess YES or NO to the following questions...');

// Question One - Trombone Question
var tromboneGuess = prompt('Question 1: Birdie can play the trombone? y/n').toLowerCase();
console.log('#1 - Trombone question answer is "n" or "no". ' + userName + ' entered ' + tromboneGuess);
// Trombone question responses to user
if (tromboneGuess === 'n' || tromboneGuess === 'no') {
  alert('You are correct! Birdie can\'t play the trombone although she (sort of) can play the clarinet.');
} else {
  alert('You are incorrect. Birdie is honored that you think so but unfortunately she does not play the trombone.');
}

// Question Two - Dog Question
var dogNameGuess = prompt('Question 2: Birdie has a dog named Rosie. y/n').toLowerCase();
console.log('#2 - Dog question answer is "n" or "no". ' + userName + ' entered ' + dogNameGuess);
// Dog question responses to user
if (dogNameGuess === 'no' || dogNameGuess === 'n') {
  alert('Ah, yes! Good job, ' + userName + '! Birdie\'s dog is named Lotus.');
} else {
  alert('So close, ' + userName + '! Birdie\'s dog is named after a different flower. The lotus.');
}

// Question Three - Flight Question
var flightGuess = prompt('Question 3: Birdie can really fly? y/n').toLowerCase();
console.log('#3 - Flight question answer is "y" or "yes". ' + userName + ' entered ' + flightGuess);
// Flight question responses to user
if (flightGuess === 'y' || flightGuess === 'yes') {
  alert('Correct! Why not?!');
} else if (flightGuess === 'maybe') {
  alert('Heh exactly!');
}
else {
  alert('Sorry, wrong answer ' + userName + '. Birdie can indeed fly.');
}

// Question Four - Unicorn Question
var unicornGuess = prompt('Question 4: Birdie is part unicorn? y/n').toLowerCase();
console.log('#4 - Unicorn question answer is "n" or "n". ' + userName + ' entered ' + flightGuess);
// Unicorn question responses to user
if (unicornGuess === 'y' || unicornGuess === 'yes') {
  alert('Incorrect. Birdie is not part unicorn. But maybe... It was a good guess, ' + userName + '.');
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

alert(userName + '! That was so fun! I hope you enjoyed playing! Have a wonderful day!');
