const env = process.env.NODE_ENV;

let config = {
  development: {
    app: {
      port: process.env.PORT || 5000,
    },
    redis: {
      host: 'localhost',
      port: 6379,
      db: 5,
      ttl: (30 * 24 * 60 * 60),
      secret: '123456'
    }
  }
}

module.exports = config[env];
