import run from '../index.js';
import getRandomNumber from '../utilities.js';

const description = 'What number is missing in the progression?';

const getProgession = () => {
  const firstNumberInProgression = getRandomNumber(1, 30);
  const progressionValue = getRandomNumber(1, 10);
  const progression = [firstNumberInProgression];
  const progressionLength = 9;

  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(progression[i] + progressionValue);
  }
  return progression;
};

const getRound = () => {
  const progression = getProgession();
  const missingNumberIndex = getRandomNumber(1, 10);

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
