import { generateRandomNumber } from '../cli.js';

const generateProgression = (start, step) => {
  const result = [];
  let nextNum = start;
  for (let i = 0; i < 10; i += 1) {
    result.push(nextNum);
    nextNum += step;
  }
  return result;
};

export const gameRules = 'What number is missing in the progression?';

export default () => {
  const start = generateRandomNumber(1, 100);
  const step = generateRandomNumber(1, 10);
  const missedElement = generateRandomNumber(0, 9);
  const progression = generateProgression(start, step);

  const answer = progression[missedElement].toString(10);

  progression[missedElement] = '..';
  const question = progression.join(' ');

  return [question, answer];
};
