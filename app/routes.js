
const homeCtrl = require('./controller/home');
const singleCtrl = require('./controller/single');
const errMsg = require('./constant/error-message');

module.exports = (app, config) => {

  app.get('/', homeCtrl.init);

  app.get('/topics/:topic', homeCtrl.init);

  app.get('/query', homeCtrl.init);

  app.get('/info/:owner/:topic/:id', singleCtrl.init);

  app.get('/about', (req, res) => {
    res.render('about');
  });

  app.get('*', function(req, res, next) {
    res.status(404).render('not-found/404', {
      errMessages: errMsg.NOT_FOUND
    });;
  });
}
