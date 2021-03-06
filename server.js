"use strict";

// Express initializes app to be a function handler that you can supply to an HTTP server (as seen in line 2).
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

function onGet(req, res)
{
    // res.send('<h1>Hello world</h1>'); 
    res.sendFile(__dirname + '/client.html');
}

// We define a route handler / that gets called when we hit our website home.
app.get('/', onGet);

function onChat(msg)
{
    // console.log('message: ' + msg); 
    io.emit('chat message', msg);
}

function onDisconnect()
{
    console.log('user disconnected');
}

function onConnect(socket)
{
    console.log('a user connected'); 

    socket.on('chat message', onChat);

    socket.on('disconnect', onDisconnect);
}

io.on('connection', onConnect);

// We make the http server listen on port
var port = 3000;
function onListen()
{
    console.log('listening on *:' + port);
}

server.listen(port, onListen);
