import readlineSync from 'readline-sync';

const gameGCD = () => {
  let iterCounter = 0;
  let isAnswerRight = true;

  console.log('Welcome to the Brain Games!');
  const username = readlineSync.question('May I have your name? ');
  console.log('Hello, ' + username);
  console.log('Find the greatest common divisor of given numbers.');

  while (iterCounter < 3 && isAnswerRight === true) {
    const getSmallestNumber = (firstNum, secondNum) => {
      if (firstNum > secondNum) {
        return secondNum;
      }
      return firstNum;
    };

    const firstRandomNumber = Math.floor(Math.random() * (100 - 1)) + 1;
    const secondRandomNumber = Math.floor(Math.random() * (100 - 1)) + 1;
    const smallestNumber = getSmallestNumber(firstRandomNumber, secondRandomNumber);
    let GCD = 1;

    console.log('Question: ' + firstRandomNumber + ' ' + secondRandomNumber);
    const userAnswer = readlineSync.question('Your answer: ');

    for (let i = 1; i <= smallestNumber; i += 1) {
      if (firstRandomNumber % i === 0 && secondRandomNumber % i === 0) {
        GCD = String(i);
      }
    }

    if (userAnswer === GCD) {
      console.log('Correct!');
      iterCounter += 1;
    } else {
      isAnswerRight = false;
      console.log('"' + userAnswer + '" is wrong answer ;(.Correct answer was "' + GCD + '".');
      console.log("Let's try again, " + username + '!');
    }
  }

  if (iterCounter === 3 && isAnswerRight === true) {
    console.log('Congratulations, ' + username + '!');
  }
};

export default gameGCD;
