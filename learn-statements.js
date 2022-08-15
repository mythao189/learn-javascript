//ternary  operator  

//sample
isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');

let isLocked = false;
isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');

let isCorrect = true;
isCorrect ? console.log('Correct!') : console.log('Incorrect!');

let favoritePhrase = 'Love That much!';
favoritePhrase === 'Love That!'?  console.log('I love that!') : console.log("I don't love that!");

// else if statements

let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} else if (season ==='winter') {
  console.log ('It\'s winter! Everything is covered in snow.');
  } else if (season === 'fall') {
    console.log ('It\'s fall! Leaves are falling!');
    } else if (season === 'summer') {
    console.log ('It\'s sunny and warm because it\'s summer!');
      } else {
  console.log('Invalid season.');
}

// switch statements
let athleteFinalPosition = 'a place';

switch (athleteFinalPosition) {
 case 'first place': 
   console.log('You get the gold medal!');
   break;
 case 'second place':
   console.log('You get the silver medal!');
   break;
case 'third place':
   console.log ('You get the bronze medal!');
  break;
default: 
  console.log('No medal awarded.');
  break;
}


// Say hello to the user with name or not
const userName = 'Thao';
userName ? console.log(`Hello, ${userName}`) 
: console.log ('Hello');

// Question asked from the user
let userQuestion = '';
userQuestion = 'How can I contact to the Admin?';
console.log(`From ${userName}: ${userQuestion}`);

// randomNumber and eightBall
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';
console.log('randomNumber=', randomNumber);

//define eightball based on the random number returned with ""switch" statement
switch (randomNumber) {
  case 0:
    eightball = 'It is certain';
    console.log(eightball);
    break;
  case 1:
    eightball = 'It is decidedly so';
    console.log(eightball);
    break;
  case 2:
    eightball = 'Reply hazy try again';
    console.log(eightball);
    break;
  case 3:
    eightball = 'Cannot predict now';
    console.log(eightball);
    break;
  case 4:
    eightball = 'Do not count on it';
    console.log(eightball);
    break;
  case 5:
    eightball = 'My sources say no';
    console.log(eightball);
     break;
  default:
    eightball = 'Signs point to yes';
    console.log(eightball);
    break;
}

//define "eightball" based on randomNumber with if else statements
if (randomNumber === 0) {
  eightball = 'It is certain';
  console.log(eightball);
} else if (randomNumber === 1) {
    eightball = 'It is decidedly so';
    console.log(eightball);
} else if (randomNumber === 2) {
    eightball = 'Reply hazy try again';
    console.log(eightball);
} else if (randomNumber === 3) {
    eightball = 'Cannot predict now';
    console.log(eightball);
} else if (randomNumber === 4) {
    eightball = 'Do not count on it';
    console.log(eightball);
} else if (randomNumber === 5) {
    eightball = 'My sources say no';
    console.log(eightball);
} else  {
    eightball = 'Signs point to yes';
    console.log(eightball);
    }
    
// Time for runner by Age & Registration time
let raceNumber = Math.floor(Math.random() * 1000);
let IsRegisteEarly = false;

const runnerAge = 18;
if (runnerAge > 18 && IsRegisteEarly === true) {
  raceNumber = 1000;
  console.log(`Your race number is ${raceNumber}. You will start running at 9:30AM`);
  } else if (runnerAge > 18 && IsRegisteEarly === false) {
      console.log(`Your race number is ${raceNumber}. You will start running at 11:00AM`)
    } else if (runnerAge < 18) {
        console.log(`Your race number is ${raceNumber}. You will start running at 12:30PM`)
      } else {
          console.log('Please contact registration desk.')
        }