import { generateRandomNumber } from '../cli.js';

const operators = ['+', '-', '*'];

const calc = (firstNumber, operator, secondNumber) => {
  if (operator === '+') return firstNumber + secondNumber;
  if (operator === '-') return firstNumber - secondNumber;
  return firstNumber * secondNumber;
};

export const gameRules = 'What is the result of the expression?';

export default () => {
  const firstNumber = generateRandomNumber(1, 100);
  const secondNumber = generateRandomNumber(1, 100);
  const randomIndex = generateRandomNumber(0, 2);
  const operator = operators[randomIndex];

  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const answer = calc(firstNumber, operator, secondNumber).toString(10);

  return [question, answer];
};
