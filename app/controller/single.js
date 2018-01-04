const Single = require('../modal/single');
const Home = require("../modal/home");
const api = require('../config/api_endpoint');
const constant = require('../constant/index');
const showdown  = require('showdown');
const common = require('../utils/common');
const converter = new showdown.Converter();

let init = async (req, res) => {
  let owner = req.params.owner;
  let topic = req.params.topic;
  let repoId = req.params.id;
  let locals = req.app.locals;
  locals.numberKFormatter = common.numberKFormatter;
  try {
    let url = `${api.repoInfo.endPoint}/${owner}/${topic}/readme`;
    let response = await Single.init(url);
    let getReposList = Home.getReposList();
    let reposInfo = '';
    reposInfo = common.getFilterRepoById(repoId, getReposList);
    if (!(reposInfo && reposInfo.length) ) {
      let url = common.constructHomeApiEndPoint(req);
      let response = await Single.fetchReposList(url);
      reposInfo = common.getFilterRepoById(repoId, response);
    }
    content = converter.makeHtml(response);

    let pageData = {
      topic: topic || '',
      searchTerm: req.query.search || '',
      reposInfo: reposInfo[0],
      content: content,
      languages: constant.language,
      tags: constant.tags
    }
    res.render('single', pageData);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  init
}
