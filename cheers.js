#!/usr/bin/env node

var words = process.argv.slice(2);
var help = require('./lib/help');

if(words[0] === 'help'){
  help();
}

words.forEach(function(word){
  word.split('').forEach(function(letter){
      displayText(letter);
  })
})

function displayText(letter){
  console.log('Give me a' + ' ' + letter.toUpperCase() + '!')
}
