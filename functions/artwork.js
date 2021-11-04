const prompt = require('prompt-sync')();
const axios = require('axios');

async function getArtInfo(pageNum) {
    //console.log("Searching for artwork...");
    let listOfArt = [];
    try{
        const artGet = await axios.get(`https://api.artic.edu/api/v1/artworks?page=${pageNum}&fields=title,artist_titles,date_display`).then(function (response) 
        {
            //console.log(`Displaying page ${pageNum}:`);
            for(works of response.data.data)
            {
                const artInfo = 
                {
                    artTitle : works.title,
                    artists : works.artist_titles,
                    yearMade : works.date_display,
                }
                listOfArt.push(artInfo);
                //console.log(works);
            }
        })
    }
    catch(e)
    {
        console.log(e);
    }
    //for(let arts of listOfArt)
        //console.log(arts);
    return listOfArt;
}
exports.getArtInfo = getArtInfo;