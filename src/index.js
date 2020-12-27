import readlineSync from 'readline-sync';
import nameQuestion from './cli.js';

const run = (getRound, description) => {
  const userName = nameQuestion();
  const roundsCount = 3;

  console.log(description);
  for (let i = 0; i < roundsCount; i += 1) {
    const { question, correctAnswer } = getRound();
    console.log(question);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(.Correct answer was "${correctAnswer}"`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default run;
