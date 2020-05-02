#!/usr/bin/env node

import readlineSync from 'readline-sync';

import { greetingAndAskName, generateRandomNumber } from '../src/cli.js';

const name = greetingAndAskName();

console.log('What is the result of the expression?');

const operators = ['+', '-', '*'];

const calc = (firstNumber, operator, secondNumber) => {
  if (operator === '+') return firstNumber + secondNumber;
  if (operator === '-') return firstNumber - secondNumber;
  return firstNumber * secondNumber;
};

const generateQuestionAndAnswer = () => {
  const firstNumber = generateRandomNumber(1, 100);
  const secondNumber = generateRandomNumber(1, 100);
  const randomIndex = generateRandomNumber(0, 2);
  const operator = operators[randomIndex];

  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const answer = calc(firstNumber, operator, secondNumber).toString(10);

  return [question, answer];
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
