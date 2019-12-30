const express = require('express');
const helmet = require('helmet');


const authRouter = require('../auth/auth-router');
const visitorRouter = require('../visitors/visitors-router');


const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/', visitorRouter);


module.exports = server;