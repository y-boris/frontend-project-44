import getRandomNumber from '../getRandomNumber.js';
import playGame from '../index.js';

const rule = 'What number is missing in the progression?';

const gameQuestionAndAnswer = () => {
  const progressionLength = getRandomNumber(5, 10);
  const progressionMax = 10;

  const firstNumber = getRandomNumber(1, 100);
  const progressionStep = getRandomNumber(1, progressionMax);
  const hiddenElement = getRandomNumber(1, progressionLength);

  const progression = [];

  for (let i = 1; i <= progressionLength; i += 1) {
    progression.push(firstNumber + i * progressionStep);
  }

  const answer = progression[hiddenElement];
  progression[hiddenElement] = '..';

  const question = progression.join(' ');

  return [question, String(answer)];
};

const initGame = () => {
  playGame(rule, gameQuestionAndAnswer);
};

export default initGame;
