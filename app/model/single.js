const axios = require("axios");
const common = require('../utils/common');

let init = async url => {
  try {
    let options = common.getOptions(url);
    let response = await axios(options);
    if (response && response.data) {
      let markdown = await axios.get(response.data.download_url);
      return markdown.data;
    }
  } catch (error) {
    let {status} = error.response;
    if (status === 404) {
      return error.response;
    }
    throw error;
  }
}

let fetchReposList = async url => {
  try {
    let options = common.getOptions(url);
    let response = await axios(options);
    return response && response.data.items;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  init,
  fetchReposList
}
