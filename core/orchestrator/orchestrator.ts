import { Logger, ConsoleLogger } from "../logger/logger.js";

export class Orchestrator {
  private logger: Logger;

  constructor(logger: Logger = new ConsoleLogger()) {
    this.logger = logger;
  }

  run(): string {
    const message = "Hello, here I am.";
    this.logger.log(message);
    return message;
  }
}
