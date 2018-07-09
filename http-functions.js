var https = require('https');

module.exports = function getHTML(options, callback){


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




