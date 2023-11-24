process = require('process');

module.exports = function displayMessage(value) {
  process.stdout.write(value);
};

