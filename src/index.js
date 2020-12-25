import readlineSync from 'readline-sync';
import nameQuestion from './cli.js';

const startGame = (game, target) => {
  const username = nameQuestion();
  let roundsCount = 0;

  console.log(target);
  while (roundsCount < 3) {
    const { question, correctAnswer } = game();
    console.log(question);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      roundsCount += 1;
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(.Correct answer was "${correctAnswer}"`);
      console.log(`Let's try again, ${username}!`);
      break;
    }
  }

  if (roundsCount === 3) {
    console.log(`Congratulations, ${username}!`);
  }
};

export default startGame;
