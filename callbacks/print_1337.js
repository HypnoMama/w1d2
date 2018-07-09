var getHMTL = require('../http-functions');


function obfuscate(html){
  console.log(html.replace(/a/g, '4')
    .replace(/you/g, 'j00')
    .replace(/o/g, '0')
    .replace(/l/g, '1')
    .replace(/a/g, '4')
    .replace(/s/g, '5')
    .replace(/t/g, '7')
    .replace(/er/g, '0r')
    .replace(/ck/g, 'x')
    .replace(/e/g, '3')
  )

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

getHMTL(requestOptions, obfuscate)