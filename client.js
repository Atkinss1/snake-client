const net = require('net');

/**MOVE COMMANDS
"Move: up" - move up one square (unless facing down)
"Move: down" - move down one square (unless facing up)
"Move: left" - move left one square (unless facing right)
"Move: right" - move left one square (unless facing left)
 */

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  conn.on('connect', () => {
    console.log('Sucessfully connected to the game server!');
    conn.write('Name: SNK');
    //!EXAMPLE
    // setInterval(() => {
    //   conn.write('Move: up');
    // }, 50);
    // setTimeout(() => {
    //   conn.write('Move: up');
    // }, 100);
  });

  conn.on('data', (data) => {
    console.log("Oh no!", data);
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');

  return conn;
};


module.exports = {
  connect
};