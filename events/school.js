const EventEmitter = require("events").EventEmitter;

class School extends EventEmitter {
    startPeriod(){
        console.log("school started");
        setTimeout(()=> {
            this.emit('bellRing', {
                period: "1st",
                subject: "Enlish",
                teacher: "Mr. X"
            });
        }, 1000);

        
    }
}

module.exports = School;