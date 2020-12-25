import readlineSync from 'readline-sync';
import nameQuestion from './cli.js';

const run = (game, description) => {
  const username = nameQuestion();
  const roundsCount = 3;

  console.log(description);
  for (let i = 0; i < roundsCount; i += 1) {
    const { question, correctAnswer } = game();
    console.log(question);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(.Correct answer was "${correctAnswer}"`);
      console.log(`Let's try again, ${username}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${username}!`);
};

export default run;
