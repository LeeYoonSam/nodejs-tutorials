// 1 - Import Node.js core module
var http = require('http'); 

var port = 5000;

// 2 - creating server 
http.createServer(function (req, res) {  
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.write('Hello Nodejs');
    res.end();
}).listen(port); // 3 - listen for any incoming requests

console.log('Node.js web server at port ' + port + ' is running..')