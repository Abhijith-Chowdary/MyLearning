var http = require('http');
var fs = require('fs');

function onRequest(request, response){
    console.log('We got the request from the client.');
    response.writeHead(200, {'Content-type': 'text/html'});
    fs.createReadStream('./index.html').pipe(response);
}

http.createServer(onRequest).listen(8046);
console.log('The server is working successfully and well!');