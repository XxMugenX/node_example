const events=require('events')
const emitter= new events.EventEmitter()
//register a listener
var listener1= function(port){
  console.log(`listener1 is online on port ${port}`)
}
var listener2= function(port){
  console.log(`listener2 is online on port ${port}`)
}
var listener2f= function(port){
  console.log(`listener2 is offline`)
}
  var listener3= function(port){
    console.log(`listener3 is online on port ${port}`)
  }

  //emitter listens for the any events that matches the string event it has
  emitter.on('event',listener1)
  emitter.on('event',listener2)
  emitter.on('event',listener3)
  //removes one emitter
  emitter.removeListener('event',listener2)
/*
removes all listeners, all user created and non user created,accepts no parameter
emitter.removeAllListeners() */
  //raise an emitter to produce the data of listened events that matches the emit event
  console.log('starting listeners')
//
  emitter.emit('event',8000)
  //first parameter is the string that tells us the event that we are emitting,the next and next parameter are the data fed into the listener which are function passed into the emmiter.on(listens for event in the callback function and attached the event data to a string eventname) method


