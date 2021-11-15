const prompt = require("prompt-sync")();
const axios = require("axios");

async function searchArtist(artistName) {
   try {
    const response = await axios.get(
      `https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&explaintext=1&titles=${artistName}`
    );
    let page = "";
    for (let keys in response.data.query.pages) {
      //console.log(keys);
      page = response.data.query.pages[keys].extract;
      //console.log(page)
    }
    page = page.split("\n");
    //console.log(page[0]);
    return page[0];
  } catch (e) {
    console.log(`Error: ${e.message}`);
    return null;
  }
  //console.log(response.data.query.pages);
}

//searchArtist('Leonardo_da_Vinci');
exports.wiki = searchArtist;
