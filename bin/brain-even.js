#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const name = readlineSync.question('May I have your name? ');

console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

let userWins = false;

for (let i = 0; i < 3; i += 1) {
  const rand = 1 + Math.random() * (100 - 0);
  const randomNumber = Math.floor(rand);

  console.log(`Question: ${randomNumber}`);
  const answer = readlineSync.question('Your answer: ');

  const isEven = randomNumber % 2 === 0;
  const expectedAnswer = isEven ? 'yes' : 'no';
  if (answer !== expectedAnswer) {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${expectedAnswer}".`);
    console.log(`Let's try again, ${name}!`);
    userWins = false;
    break;
  }

  console.log('Correct!');
  userWins = true;
}

if (userWins) {
  console.log(`Congratulations, ${name}!`);
}
