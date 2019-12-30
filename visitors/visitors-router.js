const router = require('express').Router();

const Visitors = require('./visitors-model');



router.get('/', (req, res) => {
    Visitors.find()
    .then(visitor => {
    res.json(visitor);
    })
    .catch(err => 
        res.send(err));
});




module.exports = router;

