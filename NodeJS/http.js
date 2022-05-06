var http = require('http');
function onRequest(request, response){
    console.log('The request from the client: ' + request.url);
    response.writeHead(200, {'Content-type': 'text/plain'});
    response.write('Hello world');
    response.end();
}
http.createServer(onRequest).listen(8081);
console.log('The server is working successfully!')