const IP = 'localhost';
const PORT = 50541;
const welcomeMessage = 'You have sucessfully connected to the game server!';
const controlsMessage = "Controls are:\n'w': move left\n'a': move left\n's': move down\n'd'move right\n'q': quit\nFor quick chat press '1', '2' or '3'.";
const stdin = process.stdin;

const userInput = {
  'w': 'Move: up',
  's': 'Move: down',
  'a': 'Move: left',
  'd': 'Move: right',
};

const userQuickChat = {
  '1': 'Say: hello',
  '2': 'Say: HA-HA!',
  '3': 'Say: oof, that hurt!'
};

module.exports = {
  IP,
  PORT,
  welcomeMessage,
  stdin,
  userInput,
  controlsMessage,
  userQuickChat
};

