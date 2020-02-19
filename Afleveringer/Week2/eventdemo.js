const EventEmitter = require("events");
const numbers = process.argv.slice(2).map(nas => Number(nas))
class MyEventPublisher extends EventEmitter {
    _numbers = [];
    addNumber(number) {
        this._numbers.push(number)
        if (number % 2 === 0) {
            this.emit("even", { number })
        }
        else {
            this.emit("odd", { number })
        }
        if (number >= 100) {
            this.emit("high", { number })
        }
        else {
            this.emit("low", { number })
        }
    }
}

const publisher = new MyEventPublisher();

//publisher._numbers.push(1)  FYYYYY
publisher.on("odd", (n) => console.log(`ODD: ${n.number}`))
publisher.on("even", (n) => console.log(`EVEN: ${n.number}`))
publisher.on("low", (n) => console.log(`LOW: ${n.number}`))
publisher.on("high", (n) => console.log(`HIGH: ${n.number}`))
publisher.on("high", (n) => console.log(`HIGH: ${n.number}`))


numbers.forEach(n => {
    publisher.addNumber(n)
})
