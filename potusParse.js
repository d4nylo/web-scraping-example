const rp = require('request-promise');
const cheerio = require('cheerio');

const potusParse = function (url) {
  return rp(url)
    .then(function (html) {
      const $ = cheerio.load(html);

      const name = $('#firstHeading').text();
      const birthday = $('.bday', html).text().substring(0, 10);

      return { name, birthday };
    })
    .catch(function(exc) {
      console.log(exc);
    });
}

module.exports = potusParse;