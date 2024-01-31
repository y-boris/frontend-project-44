import getRandomNumber from '../getRandomNumber.js';
import playGame from '../index.js';

const rule = 'Find the greatest common divisor of given numbers.';

const findGreaterCommonDivisor = (number1, number2) => {
  const smaller = Math.min(number1, number2);
  let result = 1;

  for (let i = 1; i <= smaller; i += 1) {
    if (number1 % i === 0 && number2 % i === 0) {
      result = i;
    }
  }

  return result;
};

const gameQuestionAndAnswer = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();

  const question = `${number1} ${number2}`;
  const answer = findGreaterCommonDivisor(number1, number2);

  return [question, String(answer)];
};

const initGame = () => {
  playGame(rule, gameQuestionAndAnswer);
};

export default initGame;
