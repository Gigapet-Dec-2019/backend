const express = require('express');
const helmet = require('helmet');


const authRouter = require('../auth/auth-router');
const visitorRouter = require('../visitors/visitors-router');
const usersRouter = require('../users/users-router');


const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/visitors', visitorRouter);
server.use('/api/user/recipes', usersRouter)


module.exports = server;