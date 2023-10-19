const { stdin } = require('./constants');
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

  if (key === 'w') {
    intervalId = setInterval(() => {
      connection.write('Move: up');
    }, 200);
  }
  if (key === 's') {
    intervalId = setInterval(() => {
      connection.write('Move: down');
    }, 200);
  }
  if (key === 'a') {
    intervalId = setInterval(() => {
      connection.write('Move: left');
    }, 200);
  }
  if (key === 'd') {
    intervalId = setInterval(() => {
      connection.write('Move: right');
    }, 200);
  }
  if (key === '1') {
    connection.write('Say: hello');
  }
  if (key === '2') {
    connection.write('Say: HA-HA!');
  }
  if (key === '3') {
    connection.write('Say: oof, that hurt!');
  }
  
  
};


module.exports = {
  setupInput,
  handleUserInput
};