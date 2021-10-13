const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});
server = app.listen('3000', () => console.log('Server is running...'));

const io = require('socket.io')(server);

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.on('welcome', (data) => {
    socket.broadcast.emit('welcome', { username: data.username });
  });

  socket.on('change_username', (data) => {
    socket.username = data.username;
  });

  socket.on('chat_message', (data) => {
    io.emit('chat_message', {
      message: data.message,
      username: socket.username,
      className: data.className,
    });
  });

  socket.on('typing', () => {
    socket.broadcast.emit('typing', { username: socket.username });
  });

  socket.on('disconnecting', (reason) => {
    socket.broadcast.emit('dis', { username: socket.username });
    console.log(socket);
  });
});