var getHMTL = require('../http-functions');

function printUppercase(html) {
  console.log(html.toLowerCase())
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

getHMTL(requestOptions, printUppercase)