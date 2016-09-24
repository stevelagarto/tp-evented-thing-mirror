
require('chai').should();

var eventedThing = require('../index.js');

describe('eventedThing', function () {

  var called1 = 0;
  var called2 = 0;

  it('should call all registered events callbacks', function () {
    eventedThing.on('meet', function () {
      called1++;
    });
    eventedThing.on('meet', function () {
      called2++;
    });
    eventedThing.trigger('meet');
    called1.should.equal(1);
    called2.should.equal(1);
  });

  it('should pass provided arguments to callbacks', function () {
    var passedArgs;
    eventedThing.on('meet', function () {
      passedArgs = [];
      for (var key in arguments) {
        passedArgs.push(arguments[key]);
      }
    });
    eventedThing.trigger('meet', 'arg1');
    passedArgs.should.eql(['arg1']);
    eventedThing.trigger('meet', 'arg1', 'arg2');
    passedArgs.should.eql(['arg1', 'arg2']);
  });

  it('should do nothing for unregistered events', function () {
    eventedThing.trigger('whatever');
    called1.should.equal(3);
    called2.should.equal(3);
  });

});
