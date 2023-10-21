const { stdin, userInput } = require('./constants');
let connection;


const setupInput = function(conn) {
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding('utf-8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

// define variable to store intervalId
let intervalId;

// comparing user keystrokes
const handleUserInput = function(key) {
  if (key === '\u0003' || key === 'q') {
    process.exit();
  }
  // clear previous setInterval before starting new setInterval
  if (intervalId) {
    clearInterval(intervalId);
  }
  for (const input in userInput) {
    if (key === input) {
      intervalId = setInterval(() => {
        connection.write(userInput[key]);
      },50);
    }
  }
};


module.exports = {
  setupInput,
  handleUserInput
};