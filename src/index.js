import readlineSync from 'readline-sync';
import nameQuestion from './cli.js';

const engine = (game) => {
  const username = nameQuestion();
  let iterCounter = 0;
  let isAnswerRight = true;

  while (iterCounter < 3 && isAnswerRight === true) {
    const gameResult = game(iterCounter);
    if (iterCounter === 0) {
      console.log(gameResult.target);
    }
    console.log(gameResult.question);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === gameResult.correctAnswer) {
      console.log('Correct!');
      iterCounter += 1;
    } else {
      isAnswerRight = false;
      console.log('"' + userAnswer + '" is wrong answer ;(.Correct answer was "' + gameResult.correctAnswer + '".');
      console.log("Let's try again, " + username + '!');
    }
  }

  if (iterCounter === 3 && isAnswerRight === true) {
    console.log('Congratulations, ' + username + '!');
  }
};

export default engine;
