/*

Express initializes app to be a function handler that you can supply to an HTTP server (as seen in line 2).
We define a route handler / that gets called when we hit our website home.
We make the http server listen on port 3000.

*/



var app = require('express')();
var http = require('http').Server(app);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});

//If you run node index.js you should 'listening on *:3000' 
//And if you point your browser to http://localhost:3000
