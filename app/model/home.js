const axios = require("axios");
const common = require('../utils/common');

let list;
let init = async url => {
  try {
    let options = common.getOptions(url);
    let response = await axios(options);
    let responseDate = response.data;
    setReposList(responseDate.items);
    return responseDate;
  } catch (error) {
    throw error;
  }
}

let setReposList = function(listItem) {
  list = listItem;
}

let getReposList = function() {
  return list;
}

module.exports = {
  init,
  setReposList,
  getReposList
}
