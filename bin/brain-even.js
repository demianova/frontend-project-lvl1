#!/usr/bin/env node

import { generateRandomNumber } from '../src/cli.js';
import gameEngine from '../src/index.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateQuestionAndAnswer = () => {
  const randomNumber = generateRandomNumber(1, 100);
  const isEven = randomNumber % 2 === 0;
  const answer = isEven ? 'yes' : 'no';
  return [randomNumber, answer];
};

gameEngine(generateQuestionAndAnswer, gameRules);
