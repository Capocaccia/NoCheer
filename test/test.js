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
});
