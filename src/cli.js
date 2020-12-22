const readlineSync = require('readline-sync');

const nameQuestion = () => {
  const username = readlineSync.question('May I have your name? ');
  return username;
};

export default nameQuestion;
