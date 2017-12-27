const axios = require("axios");

let list;
let init = async url => {
  try {
    let response = await axios.get(url);
    let responseDate = response.data;
    setReposList(responseDate.items);
    return responseDate;
  } catch (error) {
    console.log(error);
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
