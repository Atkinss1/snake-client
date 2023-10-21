const { stdin, userInput, userQuickChat } = require('./constants');
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
  for (const input in userInput) {
    if (key === input) {
      if (intervalId) {
        clearInterval(intervalId);
      }
      intervalId = setInterval(() => {
        connection.write(userInput[key]);
      },120);
    
    } else {
      for (const chat in userQuickChat) {
        if (key === chat) {
          connection.write(userQuickChat[chat]);
          return;
        }
      }
    }
  }
};



module.exports = {
  setupInput,
  handleUserInput
};