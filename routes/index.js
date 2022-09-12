const routes = require('express').Router();
//const jokes = require('../controllers/');

//routes.get('/', jokes.displayJoke);
routes.get('/', (req,res) => {
    res.send('David Peña');
});

module.exports = routes;