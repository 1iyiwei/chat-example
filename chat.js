var board = document.getElementById('board');
var message = document.getElementById('message');
var form = document.getElementById('form');

var socket = io();

var submit = function()
{
    console.log('submit'); 
    socket.emit('chat message', message.val());
    message.val('');
    return false;
}

form.submit(submit);

var chat = function(msg)
{
    console.log('chat'); 
    board.append(text(msg));
}

socket.on('chat message', chat);
