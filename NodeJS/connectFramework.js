var http = require('http');
var fs = require('fs');
var connect = require('connect');
var app = connect();

function image(request, response, next){
    console.log('This is the first function');
    response.writeHead(200, {'Content-type': 'text/html'});
    fs.createReadStream('./index.html').pipe(response);
    response.end();
    // next();
}
function software(request, response, next){
    console.log('This is the second function');
    response.writeHead(200, {'Content-type': 'text/plain'});
    response.write('Hello world, this is software page');
    response.end();
    // next();
}
app.use('/images', image);
app.use('/softwares', software);
http.createServer(app).listen(8046);
console.log('The server is running using the connect framework well....');