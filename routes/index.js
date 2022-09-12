const routes = require('express').Router();
const showName = require('../controllers/');

routes.get('/', showName.displayName);
/*
routes.get('/', (req,res) => {
    res.send('David Peña');
});
*/
module.exports = routes;