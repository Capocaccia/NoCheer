var fs = require('fs')

module.exports = function(){
  //exports the following functions to wherever they are required
  //in this example they are required in cheers.js
  printHelp();
  //calls the printHelp function
  process.exit(1);
  //exits the process when printHelp is done executing
}

function printHelp() {
  var options = {encoding: 'utf8'};
  var message = fs.readFileSync('./lib/help.txt', options);
  // sets the message to the .txt file
  console.log(message);
  //prints the message to the console
}
