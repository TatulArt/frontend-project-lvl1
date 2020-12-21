import readlineSync from 'readline-sync';

const gameProgression = () => {
  let iterCounter = 0;
  let isAnswerRight = true;

  console.log('Welcome to the Brain Games!');
  const username = readlineSync.question('May I have your name? ');
  console.log('Hello, ' + username);
  console.log('What number is missing in the progression?');

  while (iterCounter < 3 && isAnswerRight === true) {
    // Создание массива с прогрессией
    const firstNumberInProgression = Math.floor(Math.random() * (21 - 1)) + 1;
    const progressionValue = Math.floor(Math.random() * (6 - 1)) + 1;
    const missingNumberIndex = Math.floor(Math.random() * (10 - 1)) + 1;
    const questionArray = [firstNumberInProgression];

    for (let i = 0; i < 9; i += 1) {
      questionArray.push(questionArray[i] + progressionValue);
    }

    const missingNumber = String(questionArray[missingNumberIndex]);
    questionArray[missingNumberIndex] = '..';
    // Создание массива с прогрессией завершено

    console.log('Question: ' + questionArray.join(' '));
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === missingNumber) {
      console.log('Correct!');
      iterCounter += 1;
    } else {
      console.log('"' + userAnswer + '" is wrong answer ;(.Correct answer was "' + missingNumber + '".');
      isAnswerRight = false;
    }
  }

  if (iterCounter === 3 && isAnswerRight === true) {
    console.log('Congratulations, ' + username + '!');
  }
};

export default gameProgression;
