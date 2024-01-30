import readlineSync from 'readline-sync';

const playGame = (rule, gameQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(rule);

  let answerCount = 0;
  const roundsCount = 3;

  while (answerCount < roundsCount) {
    const [question, correctAnswer] = gameQuestionAndAnswer();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (correctAnswer === answer) {
      console.log('Correct!');
      answerCount += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default playGame;
