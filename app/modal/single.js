const axios = require("axios");
const common = require('../utils/common');

let init = async url => {
  try {
    let options = common.getOptions(url);
    let response = await axios.get(options);
    let markdown = await axios.get(response.data.download_url);
    return markdown.data;
  } catch (error) {
    throw error;
  }
}

let fetchReposList = async url => {
  try {
    let options = common.getOptions(url);
    let response = await axios.get(options);
    return response && response.data.items;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  init,
  fetchReposList
}
