const readlineSync = require('readline-sync');

export const nameQuestion = () => {
  const username = readlineSync.question('May I have your name? ');
  return username;
}