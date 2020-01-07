const express = require('express');
const helmet = require('helmet');


const authRouter = require('../auth/auth-router');
const visitorRouter = require('../visitors/visitors-router');
const usersRouter = require('../users/users-router');
const RecipeRouter = require('../recipes/recipes-router');


const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/visitors', visitorRouter);

server.use('/api/auth', authRouter);
server.use('/api/user', usersRouter);
server.use('/api/recipes', RecipeRouter);

server.get('/', (req, res) => {
    res.json({ api: "Up and running!" });
});


module.exports = server;