var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');

/*   socket.emit('createEmail', {
    to: 'email2@email.com',
    text: 'Hey. This is MyName.'
  }); */

  socket.emit('createMessage', {
    from: 'MyName',
    text: 'Yup, that works for me.'
  });
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

/* socket.on('newEmail', function (email) {
  console.log('New email', email);
}); */

socket.on('newMessage', function(message) {
  console.log('newMessage', message);
});