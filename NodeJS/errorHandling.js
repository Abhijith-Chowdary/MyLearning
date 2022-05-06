var http = require('http');
var fs = require('fs');

function response_404(response){
    response.writeHead(404, {'Content-type': 'text/plain'});
    response.write('Sorry, the page you are looking for, is not anywhere!');
    response.end();
}
function onRequest(request, response){
    console.log('We got the request from the client.');
    if(request.method == 'GET' && request.url == '/'){
        response.writeHead(200, {'Content-type': 'text/html'});
        fs.createReadStream('./index.html').pipe(response);
    }else{
        response_404(response);
    }
}

http.createServer(onRequest).listen(8046);
console.log('The server is working successfully and well!');