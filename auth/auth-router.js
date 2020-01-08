const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt =require('jsonwebtoken');
const secrets = require('../secret/secret');

const Auth = require('./auth-model');

router.get('/', (req, res) => {
  res.status(200).json({ api: "working", dbenv: process.env.DB_ENV });
});

router.post('/register', (req, res) => {
  let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10); 
    user.password = hash;

    Auth.add(user)
    .then(saved => {
          res.status(201).json(saved);
    })
    .catch(error => {
      console.log(error)
        res.status(500).json({message: 'Could not register, please contact administrator'});
    });
});

router.post('/login', (req, res) => {
  let { username, password, email } = req.body;

  Auth.findBy({ username })
.first()
.then(user => {
    if (user && bcrypt.compareSync(password, user.password)) {

    const token = signToken(user);
    const tokenData = jwt.verify(token, secrets.jwtSecret)
    console.log(tokenData)
    res.status(200).json({
        message: `Welcome ${user.username}!`,
        token: token
    });
    } else {
    res.status(401).json({ message: 'Invalid Credentials' });
    }
  })
    .catch(error => {
      console.log(error)
    res.status(500).json(error);
  });
});


router.get('/logout', (req, res)=>{
  if(req.session){
    req.session.destroy(error => {
      if (error){
        res.status(500).json({ message: 'error logging out'})
      } else {
        res.status(200).end()
      }
    });
  } else {
    res.status(200).json({ message: 'logged out'});
  }
});



function signToken(user) {
  const payload = {
  id: user.id,
  username: user.username,
  email: user.email
  };

  const secret = process.env.JWT_SECRET || 'secret';

  const options = {
  expiresIn: '15d',
  }

  return jwt.sign(payload, secrets.jwtSecret, options)
}

module.exports = router;
