const axios = require("axios");

let init = async url => {
  try {
    let response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  init
}
