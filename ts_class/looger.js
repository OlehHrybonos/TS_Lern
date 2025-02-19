"use strict";
class Logger {
    printDate() {
        const now = new Date();
        this.log(now.toLocaleDateString() + ' ' + now.toLocaleTimeString());
    }
}
class ConsoleLogger extends Logger {
    log(message) {
        console.log(message);
    }
    logWithDate(message) {
        this.printDate();
        this.log(message);
    }
}
const logger = new ConsoleLogger();
logger.logWithDate('Привет, мир!');
