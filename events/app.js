const EventEmitter = require("events").EventEmitter;

const emitter = new EventEmitter();

emitter.on("greet", (userName, prof)=> {
    console.log(`hello world ${userName}  ${prof}` );
    
})
emitter.emit("greet", "SABBIR RAHMAN", "full stack developer");