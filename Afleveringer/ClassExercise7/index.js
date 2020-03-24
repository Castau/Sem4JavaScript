const express = require('express')
const app = express();
const logger = require('./middleware')

// app.get('',(req, res, next)=>{
//     let status = {}
//     status.host = req.host
//     status.headers = req.headers
//     status.time = new Date()
//     console.log(status)
//     req.role = 'admin'
//     next();
// })

class ApiError extends Error {
    constructor(msg, errorCode) {
        super(msg)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, ApiError)
        }
        this.name = 'ApiError'
        this.errorCode = errorCode || 500;
        this.msg = msg;
    }
}

app.use(logger)

app.get('/', (req, res)=>{                             
    res.send('Goodbye World, sincerely ')
})

app.get('/api/user', (req, res) => {
    const user = {name: 'Rigmor'}
    res.json(user)
})

app.get('/api/user2', (req, res) => {
    throw new ApiError('user not found', 404)
    res.json(user)
})

app.use(function (req, res, next){
    if(req.originalUrl.startsWith('/api')){
        res.status(404).send({code:404, msg:'not found'})
    }
    next()
})

app.use(function (err, req, res, next) {
    if (err.name == 'ApiError'){
        res.status(err.errorCode).json(err)
    }
    //console.error(err.stack)
    next(err)
    //res.status(500).send('Something broke!')
})

app.listen(2345, ()=> console.log('server started on port 2345...'))