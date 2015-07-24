var should = require('chai').should();
//var path = require('path');
var cp = require('child_process');

require(process.cwd() + '/cheers.js');
require(process.cwd() + '/lib/help.js');

describe('Mocha + Chai', function() {
  it('truthiness', function () {
    true.should.equal(true);
  });
});

describe('CLI', function() {
  it('should work with nonalphabet characters', function (done) {
    cp.execFile('./cheers.js', ["*&^%"], function (err, stdout) {
      stdout.should.equal('Give me a *!\nGive me a &!\nGive me a ^!\nGive me a %!\n')
      done();
    })
  });
  it('should work with numerical characters', function (done) {
    cp.execFile('./cheers.js', ["1234"], function (err, stdout) {
      stdout.should.equal('Give me a 1!\nGive me a 2!\nGive me a 3!\nGive me a 4!\n')
      done();
    })
  });
  it('should work if name is all capital letters', function (done) {
    cp.execFile('./cheers.js', ["MARY"], function (err, stdout) {
      stdout.should.equal('Give me an M!\nGive me an A!\nGive me an R!\nGive me a Y!\n')
      done();
    })
  });
  it('should work if the name is all lowercase letters', function(){
    cp.execFile('./cheers.js', ['mary'], function(err, stdout){
      stdout.should.equal('Give me an M!\nGive me an A!\nGive me an R!\nGive me a Y!\n')
      done();
    })
  })
  it('should work if the name is mixed characters', function(){
    cp.execFile('./cheers.js', ['1a2y'], function(err, stdout){
      stdout.should.equal('Give me a 1!\nGive me an A!\nGive me a 2!\nGive me a Y!\n')
      done();
    })
  })
});
