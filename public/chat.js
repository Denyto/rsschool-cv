  let socket = io.connect('http://localhost:3000');

  let message = document.querySelector('#message');
  let username = document.querySelector('#username');
  let send_message = document.querySelector('#send_message');
  let send_username = document.querySelector('#send_username');
  let chatroom = document.querySelector('#chatroom');
  let feedback = document.querySelector('#feedback');


  let user = prompt('Your name?');
  if (user) {
    socket.emit('change_username', { username: user });
    socket.emit('welcome', { username: user });
  } else {
    socket.emit('change_username', { username: 'Anonymous' });
    socket.emit('welcome', { username: 'Anonymous' });
  }

  send_message.addEventListener('click', () => {
    socket.emit('chat_message', {
      message: message.value,
      className: alertClass,
    });
  });
  let min = 1;
  let max = 6;
  let random = Math.floor(Math.random() * (max - min)) + min;

  let alertClass;
  switch (random) {
    case 1:
      alertClass = 'secondary';
      break;
    case 2:
      alertClass = 'danger';
      break;
    case 3:
      alertClass = 'success';
      break;
    case 4:
      alertClass = 'warning';
      break;
    case 5:
      alertClass = 'info';
      break;
    case 6:
      alertClass = 'light';
      break;
  }

  socket.on('chat_message', (data) => {
    feedback.innerHtml = '';
    message.value = '';
    let node = document.createElement('div');
    node.classList.add('alert', `alert-${data.className}`);
    node.innerHTML = `<b>${data.username}</b>: ${data.message}`;
    chatroom.append(node);
    chatroom.scrollTo(0, chatroom.scrollHeight);
  });


  message.addEventListener('keypress', () => {
    socket.emit('typing');
  });

  socket.on('typing', (data) => {
    feedback.innerHTML = '<p><i>' + data.username + ' печатает сообщение...' + '</i></p>';
  });

  socket.on('dis', (data) => {
    feedback.innerHTML = '<p><i>' + data.username + ' вышел из чата' + '</i></p>';
  });

  socket.on('welcome', (data) => {
    feedback.innerHTML = '<p><i>Welcome' + ' ' + data.username + '!!!!!' + '</i></p>';
  });

  send_username.addEventListener('click', () => {
    socket.emit('change_username', {
      username: username.value ? username.value : 'Anonymous',
    });
    socket.emit('welcome', {
      username: username.value ? username.value : 'Anonymous',
    });
    username.value = '';
    feedback.innerHTML = '';
  });
