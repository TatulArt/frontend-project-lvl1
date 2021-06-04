import readlineSync from 'readline-sync';
import getUserName from './cli.js';

const run = (startRound, description) => {
  const userName = getUserName();
  const roundsCount = 3;

  console.log(description);
  for (let i = 0; i < roundsCount; i += 1) {
    const { question, correctAnswer } = startRound();
    console.log(question);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default run;
