var https = require('https');

function getAndPrintHTML (options){



  https.get(options, function(response){

    response.setEncoding('utf-8');
    var finalData = '';
    response.on('data', function(data){
      finalData += data;


    });

    response.on('end', function(){
      console.log(finalData);
    });
  });

}

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
  };

getAndPrintHTML(requestOptions);