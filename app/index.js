const express = require('express');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const { errorHandler } = require('./utils/error-handler');

module.exports = (app, config) => {

  app.set('views', 'app/views');
  app.set('view engine', 'ejs');
  app.use(express.static('public'));
  app.use(express.static(__dirname + '/public', {
      index: false,
      extensions: ['ejs', 'html']
  }));

  app.use(session({
    store: new RedisStore({
      host: config.redis.host,
      port: config.redis.port,
      ttl: config.redis.ttl,
      db: config.redis.db
    }),
    secret: config.redis.secret,
    resave: false,
    saveUninitialized: true
  }));
  require('./routes')(app, config);
  app.use(errorHandler)
}
