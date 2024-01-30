import readlineSync from 'readline-sync';

const gameEven = () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const isEven = (num) => num % 2 === 0;

  const numberMin = 1;
  const numberMax = 100;

  const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

  let answerCount = 0;
  let roundsCount = 3;

  while (answerCount < roundsCount) {
    const questionNumber = getRandomNumber(numberMin, numberMax);

    console.log(`Question: ${questionNumber}`);

    const correctAnswer = isEven(questionNumber) ? 'yes' : 'no';

    const answer = readlineSync.question('Your answer: ');

    if (correctAnswer === answer) {
      console.log('Correct!');
      answerCount += 1;
    } else {
      roundsCount = 0;
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default gameEven;
