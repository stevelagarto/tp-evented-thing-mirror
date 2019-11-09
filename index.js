
// Evented thing (30 mins)

// Define the "EventedThing" class, so that its instances have
// an "on" and a "trigger" method to react to events. For example:
//
// eventedThing.on('meet', function (name) {
//  console.log('Nice to meet you, ' + name + '.');
// });
//
// eventedThing.trigger('meet', 'Sarah');
// -> 'Hi there!'
// -> 'Nice to meet you, Sarah.'
//
// eventedThing.trigger('whatever');
// -> nothing happens


function EventedThing () {
  this._listen = {};
  Object.assign(this._listen, eventedThingMethods);
  return this._listen;
}

const eventedThingMethods= {};

eventedThingMethods.on = function (callback) {
  this.addEventListener('on', callback.apply(this, arguments));
};

eventedThingMethods.trigger = function (callback) {
  this.addEventListener('trigger', callback.apply(this, arguments));
};

module.exports = new EventedThing;
