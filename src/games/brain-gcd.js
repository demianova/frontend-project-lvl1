import { generateRandomNumber } from '../cli.js';

const gcd = (first, second) => {
  let divisor = Math.min(first, second);

  for (; divisor >= 1; divisor -= 1) {
    if (first % divisor === 0 && second % divisor === 0) {
      break;
    }
  }

  return divisor;
};

export const gameRules = 'Find the greatest common divisor of given numbers.';

export default () => {
  const first = generateRandomNumber(1, 100);
  const second = generateRandomNumber(1, 100);

  const answer = gcd(first, second).toString(10);

  return [`${first} ${second}`, answer];
};
