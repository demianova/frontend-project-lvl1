#!/usr/bin/env node

import readlineSync from 'readline-sync';

import greetingAndAskName from '../src/cli.js';

const name = greetingAndAskName();

console.log('What is the result of the expression?');

const generateRandomNumber = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const operators = ['+', '-', '*'];

const calc = (firstNumber, operator, secondNumber) => {
  if (operator === '+') return firstNumber + secondNumber;
  if (operator === '-') return firstNumber - secondNumber;
  return firstNumber * secondNumber;
};

for (let turn = 1; turn <= 3; turn += 1) {
  const firstNumber = generateRandomNumber(1, 100);
  const secondNumber = generateRandomNumber(1, 100);
  const randomIndex = generateRandomNumber(0, 2);
  const operator = operators[randomIndex];

  console.log(`Question: ${firstNumber} ${operator} ${secondNumber}`);
  const answer = Number(readlineSync.question('Your answer: '));

  const expectedAnswer = calc(firstNumber, operator, secondNumber);
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
