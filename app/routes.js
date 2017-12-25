
const homeCtrl = require('./controller/home');
const singleCtrl = require('./controller/single');

module.exports = (app, config) => {

  app.get('/', homeCtrl.init);

  app.get('/topics/:topic', homeCtrl.init);

  app.get('/query', homeCtrl.init);

  app.get('/info/:owner/:topic', singleCtrl.init);

  app.get('/about', (req, res) => {
    res.render('about');
  });

  app.get('/session', (req, res) => {
    res.send(JSON.stringify(req.session));
  });

}
