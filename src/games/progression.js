/* eslint prefer-const: 0 */

import run from '../index.js';
import getRandomNumber from '../utilities.js';

const description = 'What number is missing in the progression?';

const generateProgession = (firstNumberInProgression, progressionStep, progressionLength) => {
  const progression = [];

  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(firstNumberInProgression + progressionStep * i);
  }

  return progression;
};

const generateRound = () => {
  const firstNumberInProgression = getRandomNumber(1, 30);
  const progressionStep = getRandomNumber(1, 10);
  const progressionLength = 8;

  let progression = generateProgession(
    firstNumberInProgression, progressionStep, progressionLength,
  );

  const missingNumberIndex = getRandomNumber(1, progressionLength);

  const correctAnswer = String(progression[missingNumberIndex]);
  progression[missingNumberIndex] = '..';
  const question = progression.join(' ');

  return {
    question,
    correctAnswer,
  };
};

export default () => {
  run(generateRound, description);
};
