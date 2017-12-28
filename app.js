const express = require('express');
const app = express();
const config = require('./app/config/config');

require('./app/index')(app, config);

app.listen(config.app.port, ()=> {
  console.log('Running on localhost:5000');
})
