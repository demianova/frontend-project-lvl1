#!/usr/bin/env node

import { greetingAndAskName, generateRandomNumber } from '../src/cli.js';
import gameEngine from '../src/index.js';

const name = greetingAndAskName();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const generateQuestionAndAnswer = () => {
  const randomNumber = generateRandomNumber(1, 100);
  const isEven = randomNumber % 2 === 0;
  const answer = isEven ? 'yes' : 'no';
  return [randomNumber, answer];
};

gameEngine(name, generateQuestionAndAnswer);
