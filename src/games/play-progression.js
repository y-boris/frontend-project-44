import getRandomNumber from '../getRandomNumber.js';
import playGame from '../index.js';

const rule = 'What number is missing in the progression?';

const buildProgression = (number, step, length) => {
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(number + i * step);
  }

  return progression;
};

const gameQuestionAndAnswer = () => {
  const progressionLength = getRandomNumber(5, 10);

  const firstNumber = getRandomNumber();
  const progressionStep = getRandomNumber(1, 10);
  const hiddenElement = getRandomNumber(1, progressionLength);

  const progression = buildProgression(firstNumber, progressionStep, progressionLength);

  const answer = progression[hiddenElement];
  progression[hiddenElement] = '..';

  const question = progression.join(' ');

  return [question, String(answer)];
};

const initGame = () => {
  playGame(rule, gameQuestionAndAnswer);
};

export default initGame;
