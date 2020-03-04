require('dotenv').config();
const debug = require("debug")("game-case")
import express from "express";
import path from "path";
import { UserFacade, IGameUser, users } from "./facades/userFacade";
const Joi = require('joi')
const app = express();

// app.use(express.static('public'))
app.use(express.static(path.join(process.cwd(), 'public')))
app.use(express.json());

app.get("/api/dummy", (req, res) => {
  res.json({ msg: "Hello" })
})

app.get("/api/users", (req, res) => {
    res.json(users)
})

// postman test-user
// {
//     "name": "test1",
//     "userName": "tester1",
//     "password": "testpass1",
//     "role": "admin"
// }

app.post('/api/user', async (req, res) => {
    const user = {
        name: req.body.name,
        userName: req.body.userName,
        password: req.body.password,
        role: req.body.role
    };
    const { error } = validateUser(user);
    if(error) return res.status(400).send(error.details[0].message)
    const result = {
        userAdded: await UserFacade.addUser(user)
    };
    res.send(result)
});

function validateUser(user: IGameUser){
    const schema = {
        name: Joi.string().min(3).required(),
        userName: Joi.string().min(3).required(),
        password: Joi.string().min(3).required(),
        role: Joi.string().min(3).required()
    }
    return Joi.validate(user, schema);
}

const PORT = process.env.PORT || 3333;
const server = app.listen(PORT)
console.log(`Server started...... listening on port: ${PORT}`)
module.exports.server = server;


