import run from '../index.js';

const description = 'What number is missing in the progression?';
const getProgession = (firstNumberInProgression) => {
  const progressionValue = Math.floor(Math.random() * (6 - 1)) + 1;
  const progression = [firstNumberInProgression];

  for (let i = 0; i < 9; i += 1) {
    progression.push(progression[i] + progressionValue);
  }
  return progression;
};

const getRound = (randomNumber) => {
  const progression = getProgession(randomNumber);
  const missingNumberIndex = Math.floor(Math.random() * (10 - 1)) + 1;
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
