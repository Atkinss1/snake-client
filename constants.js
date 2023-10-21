const IP = 'localhost';
const PORT = 50541;
const welcomeMessage = 'You have sucessfully connected to the game server!';
const stdin = process.stdin;

const userInput = {
  'w': 'Move: up',
  's': 'Move: down',
  'a': 'Move: left',
  'd': 'Move: right',
  '1': 'Say: hello',
  '2': 'Say: HA-HA!',
  '3': 'Say: oof, that hurt!'
};

module.exports = {
  IP,
  PORT,
  welcomeMessage,
  stdin,
  userInput
};

