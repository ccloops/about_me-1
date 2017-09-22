'use strict';

var score = 0;
// Begin the game!!!

var userName = prompt('Hi there! My name is Lotus. What is your name?');

alert('Hi, ' + userName + '! Let\'s play a series of guessing games! Try your best, you will be scored! For the next five questions please guess YES or NO....');

// Question One - Trombone Question
function tromboneQuestion() {
  var tromboneGuess = prompt('Question 1: Lotus can play the trombone? y/n').toLowerCase();
  console.log('#1 - Trombone question answer is "n" or "no". ' + userName + ' entered ' + tromboneGuess);
  // Trombone question responses to user
  if (tromboneGuess === 'n' || tromboneGuess === 'no') {
    alert('You are correct! Lotus can\'t play the trombone although she (sort of) can play the clarinet.');
    score++;
  } else {
    alert('You are incorrect. Lotus is honored that you think so but unfortunately she does not play the trombone.');
  }
}
tromboneQuestion();

// Question Two - Person Question
function personQuestion() {
  var personNameGuess = prompt('Question 2: Lotus has a person named Ducky. y/n').toLowerCase();
  console.log('#2 - Person question answer is "n" or "no". ' + userName + ' entered ' + personNameGuess);
  // Dog question responses to user
  if (personNameGuess === 'no' || personNameGuess === 'n') {
    alert('Ah, yes! Good job, ' + userName + '! Lotus\'s person is named Birdie.');
    score++;
  } else {
    alert('So close, ' + userName + '! Lotus\'s person is named after a different animal. The birdie.');
  }
}
personQuestion();

// Question Three - Flight Question
function flightQuestion() {
  var flightGuess = prompt('Question 3: Lotus can really fly? y/n').toLowerCase();
  console.log('#3 - Flight question answer is "y" or "yes". ' + userName + ' entered ' + flightGuess);
  // Flight question responses to user
  if (flightGuess === 'y' || flightGuess === 'yes') {
    alert('Correct! Why not?!');
    score++;
  } else if (flightGuess === 'maybe') {
    alert('Heh exactly!');
  }
  else {
    alert('Sorry, wrong answer ' + userName + '. Lotus can indeed fly.');
  }
}
flightQuestion();

// Question Four - Unicorn Question
function unicornQuestion() {
  var unicornGuess = prompt('Question 4: Lotus is part unicorn? y/n').toLowerCase();
  console.log('#4 - Unicorn question answer is "n" or "n". ' + userName + ' entered ' + unicornGuess);
  // Unicorn question responses to user
  if (unicornGuess === 'y' || unicornGuess === 'yes') {
    alert('Incorrect. Lotus is not part unicorn. But maybe... It was a good guess, ' + userName + '.');
  } else {
    alert('Yeah, you are right ' + userName + '. It would be cool, though!');
    score++;
  }
}
unicornQuestion();

// Question Five - Simulation Question
function simulationQuestion() {
  var simulationGuess = prompt('Question 5: We are all living in a simulation? y/n').toLowerCase();
  console.log('#5 - Simulation question answer is "y" or "yes". ' + userName + ' entered ' + simulationGuess);
  // Simulation question responses to user
  if (simulationGuess === 'n' || simulationGuess === 'no') {
    alert('Hmmmm... ' + userName + '. I have no idea but it is very interesting that you think not.');
  } else {
    alert('Whoa, cool! Thanks for the heads up ' + userName + '.');
    score++;
  }
}
simulationQuestion();

// Question Six - Dexterity Question (Number guessing game)
function dexterityQuestion() {
  alert('Ok ' + userName + '... now we are going to mix it up! In the next game, we\'ll roll a D20 to do a dexterity check on you. \n\nI\'ll roll the D20 behind the computer so you can\'t see. I need you to guess your level (random number between 1 and 20) in FOUR tries or less so we can win!! I know you can do it!');
  var userDexterityRoll = Math.floor(Math.random() * 20) + 1;
  console.log('#6 - Dexterity number guessing game. Number rolled is ' + userDexterityRoll);
  var tries = 3;
  while (true) {
    var userGuessedRoll = Number(prompt(userName + ', what is your guess (between 1 - 20)? *fingers crossed*'));
    console.log(userName + ' guessed ' + userGuessedRoll);
    if (userGuessedRoll === userDexterityRoll) {
      alert('OMG we did it! Thank you ' + userName + '!\nWe can now move on to the next game!!!');
      console.log(userName + ' won the number game by correctly answering ' + userDexterityRoll);
      score++;
      break;
    } else if (tries === 0) {
      alert('Whomp whomp... better luck next time. Your dexterity is ' + userDexterityRoll + '. So close!');
      break;
    } else if (tries === 1 && userGuessedRoll > userDexterityRoll) {
      alert('Oh no! ' + userName + ', ' + userGuessedRoll + ' is too high! Please try again.. We only have one guess left!');
      tries--;
    } else if (tries === 1 && userGuessedRoll < userDexterityRoll) {
      alert('Oh no! ' + userName + ', ' + userGuessedRoll + ' is too low! Please try again.. We only have one guess left!');
      tries--;
    } else if (userGuessedRoll > userDexterityRoll) {
      alert('Oh no! ' + userName + ', ' + userGuessedRoll + ' is too high! Please try again.. We only have ' + tries + ' guesses left!');
      tries--;
    } else if (userGuessedRoll < userDexterityRoll) {
      alert('Oh no! ' + userName + ', ' + userGuessedRoll + ' is too low! Please try again.. We only have ' + tries + ' guesses left!');
      tries--;
    }
  }
}
dexterityQuestion();

  // As a developer, I want to add a seventh question to my guessing game that has multiple possible correct answers that are stored in an array. For instance, "Can you guess a state that I have lived in besides Washington?", so that even more of my programming skills are showcased. For now, I will structure this question so that the user has six tries to get a single correct answer, and upon using up those tries OR getting a correct answer, displays a message to the user indicating all of the possible correct answers.
// As a developer, I want to keep a tally of the total number of correct answers given by the user, and at the end of the game, tell the user how well they did with a personalized custom message that includes the number of correct answers and also addresses the user by name, e.g. "You got 4 out of 7 questions correct, Bobbi! Better luck next time."

// // Question Seven - Lotus' favorite animals guessing game
function favoriteAnimals() {
  //Current data on favorite animals
  var animalGuessesRemaining = 6;

  var lotusFaveAnimals = ['narwhal', 'penguin', 'sloth', 'owl', 'mouse', 'orca', 'dolphin', 'dragon', 'fox', 'snail'];
  console.log('#7 - Favorite animal guessing game. Lotus has a total of ' + lotusFaveAnimals.length + ' animals. This list contains the following animals: ');

  alert('Alright next game!\n\nLotus is a huge animal lover. I need you to guess an animal that is on her favorites list in six gueses or less.\n\nCurrently, Lotus has a total of ' + lotusFaveAnimals.length + ' SUPER favorites!\n\nLet\'s start!');

  while(animalGuessesRemaining > 0) {

    var userAnimalGuess = prompt('Ok, guess an animal');
    animalGuessesRemaining--;

    for (var i = 0; i < lotusFaveAnimals.length; i++) {
      // console.log(lotusFaveAnimals[i] + ' ');
      if(userAnimalGuess === lotusFaveAnimals[i]) {
        alert('Hurray! You did it! Yes, ' + userAnimalGuess + ' is in the list of favorite animals\n\nThe complete list is ' + lotusFaveAnimals);
        animalGuessesRemaining = -1;
        score++;
        break;
      }
    }
    if(animalGuessesRemaining > 0) {
      alert('Not quite right! It\'s okay, you still have ' + animalGuessesRemaining + ' left.');
    }
    if(animalGuessesRemaining === 0) {
      alert('Sorry, no more guesses - you lose! The correct answers are: narwhal, penguin, sloth, owl, mouse, orca, dolphin, fox, or snail.');
    }
  }

  // psuedo code - Can you guess Lotus' one of lotus' favorite animals
  // Lotus has list of animals
  // user guesses an animals
  // animal is compared against list of favorite animals
  // if correct then end and displays
  // if incorrect lose guess

  // for (var j = 0; j < lotusFaveAnimals; j++) {
  //   if (userAnimalGuess === lotusFaveAnimals[j]) {
  //     alert('Hurray! You did it! Yes, ' + userAnimalGuess + ' is in the list of favorite animals\n\nThe complete list is ');
  //   } else {
  //     continue;
  //   }
  // }
  // var animalGuessCount;
  // var faveAnimalPoints = 0
  // var faveAnimalFromList;
  // var correctAnswers = 0
  // for (animalGuessCount = 6; animalGuessCount > 0; animalGuessCount--) {
  //   var userAnimalGuess = prompt('Please take a guess at one of Lotus\'s favorite animals.\n\nWe currently have ' + animalGuessCount + ' guesses and ' + faveAnimalPoints + ' points!');
  //     if (userAnimalGuess === lotusFaveAnimals[1]) {
  //       alert('Wow ' + userName + '! You got one!\n\nYou have ' + correctAnswers.toString() + ' out of ' + lotusFaveAnimals.length.toString() + '!');
  //     }
  //   }
  //
  // while (animalGuessCount > 0 || correctAnswers === 1) {
  //
  // }
  // alert(userGuessedRoll);
}
favoriteAnimals();

//Score
if(score > 5) {
  alert('You got enough points to be a champion! Congratulations!');
} else {
  alert('Sorry you didn\'t get enough points. You lose.');
}


// Nice goodbye
alert(userName + '! That was so fun! I hope you enjoyed playing! Have a wonderful day!');
