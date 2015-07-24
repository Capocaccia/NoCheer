#!/usr/bin/env node

var words = process.argv.slice(2);
// process.argv = An array containing the command line arguments.
// The first element will be 'node', the second element will be the name of the JavaScript file.
// The next elements will be any additional command line arguments.
//so in our example we are slicing the argument in the #2 index of the argv array which is the console command since
//arguments 0 and 1 are used by the words "node" and the file name you are executing
//example node cheers.js carter
// node is argv[0] cheers.js is argv[1] carter is argv[2]

var help = require('./lib/help');
// if you are going to access functions from other files you have to require those files
// so were setting the variable help to the help file

var aoran = "halfnorsemix";
//going to use this pneumonic device to determine if I need to print a or an

if(words[0] === 'help'){
   //words = the 2nd index of the .argv array so if that index === "help" then execute the help function
  //the help function exists only in help.js but you exported it in the help.js file so it can be accessed here
  help();
  //executes help which earlier we set to the require of the lib/help module
  //this means that whatever is exported by that file now = help
  //so this is what is exported by help.js file
  //   module.exports = function() {
  //   printHelp();
  //   process.exit(1);
  // }
  //in this file, since help = require(./lib/help) when we execute help we are executing printHelp(); then process.exit(1)
}

words.forEach(function(word){
  //words = 2 index of the argv array
  word.split('').forEach(function(letter){
    //splits each letter in the word argument
      displayText(letter);
      //passes the displayText function the letter split from word
  })
})

function displayText(letter){
   if(aoran.indexOf(letter.toLowerCase()) !== -1){
    article = 'an'
   }else{
    article = 'a'
   }
   if(article ==='an'){
    console.log('Give me' + ' ' + article + ' ' + letter.toUpperCase() + '!')
  } else{
    console.log('Give me' + ' ' + article + '  ' + letter.toUpperCase() + '!')
  }
   //print the above concatenated string to the command line
}

