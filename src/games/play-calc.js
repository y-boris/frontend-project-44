import getRandomNumber from '../getRandomNumber.js';
import playGame from '../index.js';

const rule = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const correctAnswer = (number1, number2, operator) => {
  let answer;

  switch (operator) {
    case '+':
      answer = number1 + number2;
      break;
    case '-':
      answer = number1 - number2;
      break;
    case '*':
      answer = number1 * number2;
      break;

    default:
      break;
  }

  return String(answer);
};

const gameQuestionAndAnswer = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const operation = operators[getRandomNumber(0, operators.length)];

  const question = `${number1} ${operation} ${number2}`;
  const answer = correctAnswer(number1, number2, operation);

  return [question, answer];
};

const initGame = () => {
  playGame(rule, gameQuestionAndAnswer);
};

export default initGame;
