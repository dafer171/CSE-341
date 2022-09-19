const express = require('express');
const router = express.Router();

router.use('/contacts', require('./contacts'))
/*
routes.get('/', (req,res) => {
    res.send('David Peña');
});
*/


module.exports = router;