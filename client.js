const net = require('net');
const { IP, PORT } = require('./constants');

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // on connection, server will write message
  conn.on('connect', () => {
    console.log('Sucessfully connected to the game server!');
    conn.write('Name: SNK');
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