import express from "express";
import userFacade from "../facades/userFacade";
import IGameUser from '../interfaces/GameUser';
const router = express.Router();
const debug = require("debug")("game-case")
const Joi = require('joi')
const app = express();



function validateUser(user: IGameUser) {
    const schema = {
        name: Joi.string().min(3).required(),
        userName: Joi.string().min(3).required(),
        password: Joi.string().min(3).required(),
        role: Joi.string().min(3).required(),
    }
    return Joi.validate(user, schema);
}


router.post('/', async function (req, res, next) {
    try {
    const user = {
        name: req.body.name,
        userName: req.body.userName,
        password: req.body.password,
        role: 'user'
    };
    const { error } = validateUser(user);
    if (error) return res.status(400).send(error.details[0].message)
    const result = {
        userAdded: await userFacade.addUser(user)
    };
    res.send(result)
    } catch (err) {
        next(err);
    }
});


router.get('/user/:userName', async function (req, res, next) {
    try {
        const user_Name = req.params.userName;
        const user = await userFacade.getUser(user_Name);
        const { name, userName } = user;
        const userDTO = { name, userName }
        res.json(userDTO);
    } catch (err) {
        next(err)
    }
});

router.get('/all', async function (req, res, next) {
    try {
        const users = await userFacade.getAllUsers();
        const usersDTO = users.map((user) => {
            const { name, userName } = user;
            return { name, userName }
        })
        res.json(usersDTO);
    } catch (err) {
        next(err)
    }
});

router.delete('/:userName', async function (req, res, next) {
    try {
        const user_name = req.params.userName;
        const status = await userFacade.deleteUser(user_name)
        res.json({ status })
    } catch (err) {
        next(err);
    }
})

module.exports = router;