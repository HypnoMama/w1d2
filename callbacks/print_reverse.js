var getHMTL = require('../http-functions');

function printReverse(html) {
  // var reversed = html.split('')
  console.log(html.split('').reverse().join(''))
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

getHMTL(requestOptions, printReverse)