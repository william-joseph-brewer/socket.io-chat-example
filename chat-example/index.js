/*
Emitting events
The main idea behind Socket.IO is that you can send and 
eceive any events you want, with any data you want. Any
 objects that can be encoded as JSON will do, and binary
 data is supported too.

Let’s make it so that when the user types in a message, 
the server gets it as a chat message event. The scripts 
ection in index.html should now look as follows:
*/



var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){

	console.log('a user connected');

	socket.on('chat message', function(msg){
    	console.log('message: ' + msg);
    	io.emit('chat message', msg);
  	});
  	
  	socket.on('disconnect', function(){
    	console.log('user disconnected');
  	});
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
