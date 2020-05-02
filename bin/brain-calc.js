#!/usr/bin/env node

import { greetingAndAskName, generateRandomNumber } from '../src/cli.js';
import gameEngine from '../src/index.js';

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

gameEngine(name, generateQuestionAndAnswer);
