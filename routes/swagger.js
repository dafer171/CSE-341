const router = require('express').Router;
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');
const { route } = require('./contacts');
router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

module.export = router;