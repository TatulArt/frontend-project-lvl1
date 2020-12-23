import engine from '../index.js';

const gameProgression = () => {
  // Создание массива с прогрессией
  const firstNumberInProgression = Math.floor(Math.random() * (21 - 1)) + 1;
  const progressionValue = Math.floor(Math.random() * (6 - 1)) + 1;
  const missingNumberIndex = Math.floor(Math.random() * (10 - 1)) + 1;
  const questionArray = [firstNumberInProgression];

  for (let i = 0; i < 9; i += 1) {
    questionArray.push(questionArray[i] + progressionValue);
  }
  // Создание массива с прогрессией завершено

  const correctAnswer = String(questionArray[missingNumberIndex]);
  questionArray[missingNumberIndex] = '..';
  const question = 'Question: ' + questionArray.join(' ');
  const target = 'What number is missing in the progression?';

  const gameResult = {
    question,
    correctAnswer,
    target,
  };

  return gameResult;
};

engine(gameProgression);

export default gameProgression;
