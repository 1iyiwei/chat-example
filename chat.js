var messages =  document.getElementById('messages');
var message_field = document.getElementById('mess');
var form = document.getElementById('form');

var socket = io();

var submit = function()
{
    socket.emit('chat message', message_field.val());
    message_field.val('');
    return false;
}

form.submit(submit);

var chat = function(msg)
{
    messages.append(text(msg));
}

socket.on('chat message', chat);
