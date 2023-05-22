const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('WaterFull', () => {
       console.log('TurnOff the Moter');
  setTimeout(() => {
      console.log('TurnOff please.........'); 
  }, 3000);
});

myEmitter.emit('event');
console.log("The Moter is Running ")
myEmitter.emit('WaterFull');

