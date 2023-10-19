const { connect } = require('./client');
const { setupInput } = require('./input');

console.log('connecting ...');

// setupInput will configure userinput by taking in the object returned from connect() and return the user input to the server through connect
setupInput(connect());
