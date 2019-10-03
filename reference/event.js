const EventEmiiter = require('events');

// create class

class MyEmitter extends EventEmiiter {

}

// init object

const myEmitter = new MyEmitter();

// event listener
myEmitter.on('event', () => {
  console.log('Event fired!');
});

// init event
myEmitter.emit('event');
