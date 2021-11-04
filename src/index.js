const axios = require('axios');
const prompt = require ('prompt-sync')({sigint: true});
const getArtwork = require ('../functions/artwork').getArtInfo;
const getWiki = require ('../functions/wiki').wiki;

let input = 'n';
let pageNum = 1;

const getArt = async (name) =>{
    let data = await getWiki(name);
    console.log(data);
    input = prompt(`Enter B to go back`).toLowerCase();
    if(input==='b'){
        getPage(pageNum);
    }
}
const getPage = async (pageNum) =>{
    console.log(`Page: ${pageNum}.`)
    let page = await getArtwork(pageNum)
    page.map((art,key)=>(console.log(`${key+1})\t${art.artists}\t\t\t${art.yearMade}\t${art.artTitle}`)));   
             
    input = prompt(`Please enter a number between 1-12 to view more information about the artwork. Type N to move to the next page: `).toLowerCase();
    if(input==='n'){
        pageNum++;
        getPage(pageNum);
    }
    if(input>='1' && input<='12'){
        console.log(`\n${page[Number(input)-1].artists[0]}\n`);
        getArt(page[Number(input)-1].artists[0].replace(' ','_'));
    }
} 

getPage(pageNum);