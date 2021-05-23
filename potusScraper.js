const rp = require('request-promise');
const cheerio = require('cheerio');
const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';

rp(url)
   .then(function (html) {
      const $ = cheerio.load(html);

      const data = $('table > tbody > tr > td > b > a');

      const wikiUrls = [];

      for (let idx = 0; idx < data.length; idx++) {
         wikiUrls.push(data[idx].attribs.href);
      }

      console.log(wikiUrls);
   })
   .catch(function (err) {
      //handle error
      console.log(err);
   });