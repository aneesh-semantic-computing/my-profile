export interface ILogger {
  debug(msg: string): void;
  info(msg: string): void;
  warn(msg: string): void;
  error(msg: string): void;
}

enum LOG_LEVELS {
  VERBOSE = 1,
  DEBUG = 2,
  INFO = 3,
  WARN = 4,
  ERROR = 5,
}

export enum LogType {
  DEBUG = "DEBUG",
  ERROR = "ERROR",
  INFO = "INFO",
  WARN = "WARN",
  VERBOSE = "VERBOSE",
}

class Logger implements ILogger {
  name: string;
  level: LogType;

  constructor(name: string, level?: LogType) {
    this.name = name;
    if (level) {
      this.level = level;
    } else {
      this.level = (process.env.NEXT_PUBLIC_LOG_LEVEL ?? "WARN") as LogType;
    }
  }

  static LogLevel = null;

  private _padding(n: number) {
    return n < 10 ? `0${n}` : `${n}`;
  }

  private _ts() {
    const dt = new Date();
    return `${[this._padding(dt.getMinutes()), this._padding(dt.getSeconds())].join(
      ":",
    )}.${dt.getMilliseconds()}`;
  }

  /**
   * Write log
   * @method
   * @memeberof Logger
   * @param {LOG_TYPE|string} type - log type, default INFO
   * @param {string|object} msg - Logging message or object
   */
  private _log(type: LogType, ...msg: unknown[]) {
    let loggerLevelName = this.level;
    if (Logger.LogLevel) {
      loggerLevelName = Logger.LogLevel;
    }
    if (typeof window !== "undefined" && (window as any).LOG_LEVEL) {
      loggerLevelName = (window as any).LOG_LEVEL as LogType;
    }
    const loggerLevel = LOG_LEVELS[loggerLevelName];
    const typeLevel = LOG_LEVELS[type];
    if (!(typeLevel >= loggerLevel)) {
      // Do nothing if type is not greater than or equal to logger level (handle undefined)
      return;
    }

    let log = console.log.bind(console);
    if (type === LogType.ERROR && console.error) {
      log = console.error.bind(console);
    }
    if (type === LogType.WARN && console.warn) {
      log = console.warn.bind(console);
    }

    const prefix = `[${type}] ${this._ts()} ${this.name}`;

    if (msg.length === 1 && typeof msg[0] === "string") {
      log(`${prefix} - ${msg[0]}`);
    } else if (msg.length === 1 && msg[0]) {
      log(prefix, msg[0]);
    } else if (typeof msg[0] === "string") {
      let obj = msg.slice(1) as any;
      if (obj.length === 1) {
        obj = obj[0];
      }
      log(`${prefix} - ${msg[0]}`, obj ?? "");
    } else {
      log(prefix, msg);
    }
  }

  /**
   * Write General log. Default to INFO
   * @method
   * @memeberof Logger
   * @param {string|object} msg - Logging message or object
   */
  log(...msg: unknown[]) {
    this._log(LogType.INFO, ...msg);
  }

  /**
   * Write INFO log
   * @method
   * @memeberof Logger
   * @param {string|object} msg - Logging message or object
   */
  info(...msg: unknown[]) {
    this._log(LogType.INFO, ...msg);
  }

  /**
   * Write WARN log
   * @method
   * @memeberof Logger
   * @param {string|object} msg - Logging message or object
   */
  warn(...msg: unknown[]) {
    this._log(LogType.WARN, ...msg);
  }

  /**
   * Write ERROR log
   * @method
   * @memeberof Logger
   * @param {string|object} msg - Logging message or object
   */
  error(...msg: unknown[]) {
    this._log(LogType.ERROR, ...msg);
  }

  /**
   * Write DEBUG log
   * @method
   * @memeberof Logger
   * @param {string|object} msg - Logging message or object
   */
  debug(...msg: unknown[]) {
    this._log(LogType.DEBUG, ...msg);
  }

  /**
   * Write VERBOSE log
   * @method
   * @memeberof Logger
   * @param {string|object} msg - Logging message or object
   */
  verbose(...msg: unknown[]) {
    this._log(LogType.VERBOSE, ...msg);
  }
}
export default Logger;

export const StaticLogger = new Logger("web");
