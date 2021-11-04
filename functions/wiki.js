const prompt = require('prompt-sync')();
const axios = require('axios');

async function searchArtist(artistName)
{
    const response = await axios.get(`https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&explaintext=1&titles=${artistName}`) 
        //console.log(response.data.query.pages);
        let page = ""
        for(let keys in response.data.query.pages)
        {
            //console.log(keys);
            page = response.data.query.pages[keys].extract;
            //console.log(page)
        }
        page = page.split('\n');
        //console.log(page[0]);
        return page[0]
} 

//searchArtist('Leonardo_da_Vinci');
exports.wiki = searchArtist;