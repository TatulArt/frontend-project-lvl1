/* eslint prefer-const: 0 */

import run from '../index.js';
import getRandomNumber from '../utilities.js';

const description = 'What number is missing in the progression?';

const generateProgession = ({ firstNumberInProgression, progressionStep, progressionLength }) => {
  const progression = [firstNumberInProgression];

  for (let i = 1; i < progressionLength; i += 1) {
    progression.push(firstNumberInProgression + progressionStep * i);
  }

  return progression;
};

const generateRound = () => {
  const progressionOptions = {
    firstNumberInProgression: getRandomNumber(1, 30),
    progressionStep: getRandomNumber(1, 10),
    progressionLength: 9,
  };

  let progression = generateProgession(progressionOptions);

  const missingNumberIndex = getRandomNumber(1, 9);

  const correctAnswer = String(progression[missingNumberIndex]);
  progression[missingNumberIndex] = '..';
  const question = `Question: ${progression.join(' ')}`;

  return {
    question,
    correctAnswer,
  };
};

export default () => {
  run(generateRound, description);
};
