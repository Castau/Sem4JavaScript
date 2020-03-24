const winston = require('winston')
const expressWinston = require('express-winston');

const winstonlogger = 
    expressWinston.logger({
        transports: [
            new winston.transports.File({
                filename: './logs/requestlogs.log',
                level: 'info'
            }), 
            new winston.transports.Console({
                level: 'info'
            })
        ],
        format: winston.format.combine(
            winston.format.colorize(),
            winston.format.json(),
            winston.format.prettyPrint(),
            winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
            winston.format.printf((info: { timestamp: any; level: any; message: any; }) => `${info.timestamp} - ${info.message}`)
        ),
        meta: true, 
        expressFormat: true, 
        colorize: false 
    });

export default winstonlogger;