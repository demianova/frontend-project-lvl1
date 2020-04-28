#!/usr/bin/env node

import readlineSync from 'readline-sync';

import { greetingAndAskName, generateRandomNumber } from '../src/cli.js';

const name = greetingAndAskName();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const generateQuestionAndAnswer = () => {
  const randomNumber = generateRandomNumber(1, 100);
  const isEven = randomNumber % 2 === 0;
  const answer = isEven ? 'yes' : 'no';
  return [randomNumber, answer];
};

for (let turn = 1; turn <= 3; turn += 1) {
  const [question, expectedAnswer] = generateQuestionAndAnswer();

  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');

  if (answer !== expectedAnswer) {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${expectedAnswer}".`);
    console.log(`Let's try again, ${name}!`);
    break;
  }

  console.log('Correct!');
  if (turn === 3) {
    console.log(`Congratulations, ${name}!`);
  }
}
