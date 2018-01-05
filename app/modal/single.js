const axios = require("axios");

let init = async url => {
  try {
    let response = await axios.get(url);
    let markdown = await axios.get(response.data.download_url);
    return markdown.data;
  } catch (error) {
    throw error;
  }
}

let fetchReposList = async url => {
  try {
    let response = await axios.get(url);
    return response && response.data.items;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  init,
  fetchReposList
}
