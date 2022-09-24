const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My API',
    desciption: 'Contac API'
  },
  host: 'localhost:8080',
  schemes: ['http']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);

//Rub server after it gets generated
//swaggerAutogen(outputFile, endpointsFiles, doc).then(async () => {
//  await import('server.js');
//});
