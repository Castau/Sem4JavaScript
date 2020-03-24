import { NextFunction, Response } from "express";

const timeLogger = (req: any, res: Response, next: NextFunction) => {
    const date = new Date();
    console.log(
        `Date: ${date.getDate()}-${date.getMonth()}-${date.getFullYear()} \nTime: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} \nMethod: ${req.method} \nURL: ${req.originalUrl}`
    );
    next();
};

export default timeLogger;