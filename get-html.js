var https = require('https');

function getAndPrintHTML (options, callback){



  https.get(options, function(response){

    response.setEncoding('utf-8');
    var finalData = '';
    response.on('data', function(data){
      finalData += data;


    });

    response.on('end', function(){
      callback(finalData);
    });
  });

}

function printHTML (html){
  console.log(html);
}

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'
  };



getAndPrintHTML(requestOptions, printHTML);