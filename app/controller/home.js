const Home = require('../model/home');
const constant = require('../constant/index');
const common = require('../utils/common');

let init = async (req, res, next) => {
  let locals = req.app.locals;
  let topic = common.getTopic(req);
  let url = common.constructHomeApiEndPoint(req);
  try {
    let promotedRepos = await Home.promoted(common.promotedEndPoint);
    let response = await Home.init(url);
    locals.numberWithCommas = common.numberWithCommas;
    locals.numberKFormatter = common.numberKFormatter;
    promotedRepos.isPromoted = true;
    if (response && response.items.length) {
      let pageNumber = common.pageNumber(response);
      let pageData = {
        topic: topic,
        sort: req.query.s || '',
        searchTerm: req.query.search || '',
        totalCount: response.total_count,
        items: [promotedRepos, ...response.items],
        languages: constant.language,
        tags: constant.tags,
        options: constant.options,
        pages: pageNumber,
        current: req.query.p || 1
      };
      res.render('home', pageData);
    } else {
      let pageData = {
        searchTerm: req.query.search || '',
        topic: topic,
        languages: constant.language,
        tags: constant.tags
      };
      res.render('not-found/index', pageData);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  init
};
