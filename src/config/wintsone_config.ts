import winston from "winston";
import app_root_path from "./const"

const options = {
    file: {
        level: "info",
        filename: `${app_root_path}/logs/app.log`,
        handleExceptions: true,
        maxsize: 5242880, // 5MB
        maxFiles: 5,
        format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.json()
        ),
    },
    console: {
        level: "debug",
        handleExceptions: true,
        format: winston.format.combine(
            winston.format.colorize(),
            winston.format.simple()
        ),
    }
};
const logger = winston.createLogger({
    transports: [
        new winston.transports.File(options.file),
        new winston.transports.Console(options.console),
    ],
    exitOnError: false, // do not exit on handled exceptions
});

export default logger;
