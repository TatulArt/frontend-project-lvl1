import run from '../index.js';
import getRandomNumber from '../random-number-utilitie.js';

const description = 'What number is missing in the progression?';

const getProgession = () => {
  const firstNumberInProgression = getRandomNumber(30, 1);
  const progressionValue = getRandomNumber(10, 1);
  const progression = [firstNumberInProgression];

  for (let i = 0; i < 9; i += 1) {
    progression.push(progression[i] + progressionValue);
  }
  return progression;
};

const getRound = () => {
  const progression = getProgession();
  const missingNumberIndex = getRandomNumber(10, 1);

  const correctAnswer = String(progression[missingNumberIndex]);
  progression[missingNumberIndex] = '..';
  const question = `Question: ${progression.join(' ')}`;

  return {
    question,
    correctAnswer,
  };
};

export default () => {
  run(getRound, description);
};
