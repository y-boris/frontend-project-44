import getRandomNumber from '../getRandomNumber.js';
import playGame from '../index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const gameQuestionAndAnswer = () => {
  const question = getRandomNumber();
  const answer = isEven(question) ? 'yes' : 'no';

  return [question, answer];
};

const initGame = () => {
  playGame(rule, gameQuestionAndAnswer);
};

export default initGame;
