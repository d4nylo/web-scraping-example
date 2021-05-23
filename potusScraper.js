const rp = require('request-promise');
const cheerio = require('cheerio');
const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';
const potusParse = require('./potusParse');

rp(url)
   .then(function (html) {
      const $ = cheerio.load(html);

      const data = $('table > tbody > tr > td > b > a');

      const wikiUrls = [];

      for (let idx = 0; idx < data.length; idx++) {
         wikiUrls.push(data[idx].attribs.href);
      }

      return Promise.all(
         wikiUrls.map(function (url) {
            return potusParse('https://en.wikipedia.org' + url);
         })
      );
   })
   .done(function (presidents) {
      console.log(presidents);
   });