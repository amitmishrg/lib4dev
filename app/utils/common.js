const api = require('../config/api_endpoint');

let constructHomeApiEndPoint = req => {
  let sort = req.query.s || '';
  let page = req.query.p || 1;
  let topic = getTopic(req);
  return `${api.search.endPoint}?sort=${sort}&order=${api.search.order}&q=${topic}&page=${page}`;
}

let getTopic = req => {
  let topic = '',
  reqTopic = req.params.topic || '',
  searchTerm = req.query.search || '';
  if (reqTopic) {
    topic = reqTopic;
  } else if (searchTerm) {
    topic = searchTerm;
  } else {
    topic = api.search.topic;
  }
  return topic;
}

  module.exports = {
    constructHomeApiEndPoint,
    getTopic
  }
