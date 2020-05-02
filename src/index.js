import readlineSync from 'readline-sync';

import { greetingAndAskName } from './cli.js';

const gameEngine = (generateQuestionAndAnswer, gameRules) => {
  const name = greetingAndAskName();

  console.log(gameRules);

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
};

export default gameEngine;
