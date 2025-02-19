abstract class Logger {
    abstract log(message: string): void;
  
    printDate(): void {
      const now = new Date();
      this.log(now.toLocaleDateString() + ' ' + now.toLocaleTimeString());
    }
  }
  
  class ConsoleLogger extends Logger {
    log(message: string): void {
      console.log(message);
    }
  
    logWithDate(message: string): void {
      this.printDate();
      this.log(message);
    }
  }
  
  const logger = new ConsoleLogger();
  logger.logWithDate('Привет, мир!');