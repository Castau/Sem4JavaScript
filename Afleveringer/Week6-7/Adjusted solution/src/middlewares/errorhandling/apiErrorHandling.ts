const debug = require("debug")("game-project");

function errorHandler(err: any, req: any, res: any, next: Function) {
    if (err.name == 'ApiError') {
        res.status(err.errorCode).send({ code: err.errorCode, msg: err.msg })
    }
    next(err)
}

function pathHandler(req: any, res: any, next: Function) {
    if (req.originalUrl.startsWith('/api')) {
        res.status(404).json({ code: '404', msg: `Requested endpoint: ${req.originalUrl} - does not exist` })
    }
    next();
};

export { errorHandler, pathHandler }