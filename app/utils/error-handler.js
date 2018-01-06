const errMessages = require('../constant/error-message');

let errorHandler = (err, req, res, next) => {
    let errorStatus = err.status || err.errorCode || 500;
    let errMsg;
    if (errorStatus === 404) {
      errMsg = errMessages.NOT_FOUND;
      res.render('not-found/404', {errMsg});
      return;
    } else {
      errMsg = errMessages.DEFAULT_ERR_MESSAGE;
    }
    console.log(err);
    res.status(errorStatus).json({
       message: errMsg,
       err: err.toString()
     });
  }

  module.exports = {
    errorHandler
  }
