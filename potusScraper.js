const rp = require('request-promise');
const cheerio = require('cheerio');
const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';

rp(url)
   .then(function (html) {
      //success!
      //console.log(html);
      const $ = cheerio.load(html);
      console.log($('table > tbody > tr > td > b > a', html).length);
      console.log($('table > tbody > tr > td > b > a', html));
   })
   .catch(function (err) {
      //handle error
      console.log(err);
   });