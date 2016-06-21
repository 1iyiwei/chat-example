// Express initializes app to be a function handler that you can supply to an HTTP server (as seen in line 2).
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

// We define a route handler / that gets called when we hit our website home.
app.get('/', function(req, res){
    // res.send('<h1>Hello world</h1>'); 
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    console.log('a user connected'); 

    socket.on('chat message', function(msg){
        // console.log('message: ' + msg); 
        io.emit('chat message', msg);
    });

    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
});

// We make the http server listen on port
port = 3000
server.listen(port, function(){
    console.log('listening on *:' + port);
});
