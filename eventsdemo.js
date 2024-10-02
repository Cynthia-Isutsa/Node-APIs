import { EventEmitter } from 'events';

// EventEmitter is a class that allows us to create and emit custom events.
// It's great for building decoupled applications, i.e., custom events in real-time applications.

// My emitter
const myEmitter = new EventEmitter();

function greetHandler(name) {
    console.log('Good morning ' + name);
}

function goodByehandler(name) {
    console.log('Good Bye ' + name);
}

// Register event listener
myEmitter.on('greet', greetHandler);
myEmitter.on('goodbye', goodByehandler);

// Emit events
myEmitter.emit('greet', "John");
myEmitter.emit('goodbye', "John");

// Remove event listener
// myEmitter.off('greet', greetHandler);

//Error Handling
myEmitter.on('error', (err) => {
    console.log(err);
});

//simulate error
myEmitter.emit('error', new Error('Something went wrong'));