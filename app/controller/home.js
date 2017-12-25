const Home = require('../modal/home');
const constant = require('../constant/index');
const common = require('../utils/common');

let init = async (req, res) => {
  try {
    let topic = common.getTopic(req);
    let url = common.constructHomeApiEndPoint(req);
    let response = await Home.init(url);
    if (response) {
      let perPage = constant.pagination.perPage;
      let pageNumber = Math.ceil(response.total_count / perPage);
      let pageData = {
        topic: topic,
        sort: req.query.s || '',
        searchTerm: req.query.search || '',
        totalCount: response.total_count,
        items: response.items,
        languages: constant.language,
        tags: constant.tags,
        options: constant.options,
        pages: pageNumber,
        current: req.query.p || 1
      }
      res.render('home', pageData);
      console.log(pageData);
    }

  } catch (error) {
    console.log(error);
  }
}


module.exports = {
  init
}
