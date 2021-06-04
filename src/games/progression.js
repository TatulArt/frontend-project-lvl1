import run from '../index.js';
import getRandomNumber from '../utilities.js';

const description = 'What number is missing in the progression?';

const getProgession = () => {
  const firstNumberInProgression = getRandomNumber(1, 30);
  const progressionStep = getRandomNumber(1, 10);
  const progressionLength = 9;
  const progression = [firstNumberInProgression];

  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(progression[i] + progressionStep);
  }

  return progression;
};

const getRound = () => {
  const progression = getProgession();
  const missingNumberIndex = getRandomNumber(1, 10);

  const question = `Question: ${progression.join(' ')}`;
  const correctAnswer = String(progression[missingNumberIndex]);
  progression[missingNumberIndex] = '..';

  return {
    question,
    correctAnswer,
  };
};

export default () => {
  run(getRound, description);
};
