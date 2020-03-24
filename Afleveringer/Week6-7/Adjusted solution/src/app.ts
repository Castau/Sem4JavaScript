require('dotenv').config();
import express, { NextFunction, Response } from 'express';
import path from 'path';
import timeLogger from './middlewares/timeLogger';
import corsheaders from './middlewares/cors';
import winstonlogger from './middlewares/winstonlogger';
import { requestLogger, errorLogger } from './middlewares/larslogger';
import { ApiError } from './errors/apiError';
import { errorHandler, pathHandler } from './middlewares/errorhandling/apiErrorHandling';
let userAPIRouter = require('./routes/userApi');
const cors = require('cors')
const app = express();

app.use([
    express.static(path.join(process.cwd(), "public")),
    express.json(),
    requestLogger,
    errorLogger,
    winstonlogger,
    cors()
])

app.use('/api/users', userAPIRouter);
app.get('/api/dummy', (req, res) => {
    res.json({ msg: 'Hello' })
})

app.use([
    errorHandler,
    pathHandler
])

const PORT = process.env.PORT || 5555;
const server = app.listen(PORT)
console.log(`Server started, listening on port: ${PORT}`)
module.exports.server = server;


