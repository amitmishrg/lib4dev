const Single = require('../modal/single');
const api = require('../config/api_endpoint');
const constant = require('../constant/index');
const showdown  = require('showdown');
const converter = new showdown.Converter();

let init = async (req, res) => {

  let owner = req.params.owner;
  let topic = req.params.topic;
  try {
    let url = `${api.repoInfo.endPoint}/${owner}/${topic}/readme`;
    let response = await Single.init(url);
    content = converter.makeHtml(response);
    let pageData = {
      topic: topic || '',
      searchTerm: req.query.search || '',
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
