const api = require('../config/api_endpoint');
const constant = require('../constant/index');


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

let pageNumber = response => {
  let perPage = constant.pagination.perPage;
  let totalNumber = '';
  if (response.total_count > 1000 ) {
    totalNumber = Math.ceil(1000 / perPage);
  } else {
    totalNumber = Math.ceil(response.total_count / perPage);
  }
  return totalNumber;
}

const numberKFormatter = num => {
  return num > 999 ? (num/1000).toFixed(1) + 'k' : num;
}

const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

  module.exports = {
    constructHomeApiEndPoint,
    getTopic,
    numberKFormatter,
    numberWithCommas,
    pageNumber
  }
