var https = require('https');

function getAndPrintHTML (){

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function(response){

    response.setEncoding('utf-8');
    var finalData = '';
    response.on('data', function(data){
      finalData += data;


    });

    response.on('end', function(){
      console.log(finalData);
    })
  })

}

getAndPrintHTML();