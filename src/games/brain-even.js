import { generateRandomNumber } from '../cli.js';

export const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => {
  const randomNumber = generateRandomNumber(1, 100);
  const isEven = randomNumber % 2 === 0;
  const answer = isEven ? 'yes' : 'no';
  return [randomNumber, answer];
};
