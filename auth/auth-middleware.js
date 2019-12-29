const jwt = require('jsonwebtoken');
const secrets = require('../secret/secret');

module.exports = (req, res, next) => {
    const token = req.headers.authorization;
    if(token) {
        jwt.verify(token, secrets.jwtSecret,
            (error, tokenData) => {
                if(error){
                    res.status(401).json({ message: 'invalid token' })
                } else {
                    req.username = tokenData.username;
                    next();
                }
            })
    }
};