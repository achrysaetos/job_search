const fs = require("fs");
const dataFromScraper = fs.readFileSync("./scraper_date/apify_storage/scrapedOutput.json");
const scrapedOutput = JSON.parse(dataFromScraper.toString("utf-8"));

const dataFromScraper2 = fs.readFileSync("./scraper_relevance/apify_storage/scrapedOutput.json");
const scrapedOutput2 = JSON.parse(dataFromScraper2.toString("utf-8"));

let list = scrapedOutput.concat(scrapedOutput2)
for (let i=0; i<list.length; i++){
  list[i] = JSON.stringify(list[i])
}

const set = new Set(list)
let newlist = []
set.forEach((x) => {
  newlist.push(JSON.parse(x))
})

exports.newlist = newlist