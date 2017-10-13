var loginButton = document.querySelector('button.login')
var inputUsername = document.querySelector('input.username')
var chatroomBox = document.querySelector('main');
var messageBox = document.querySelector('ul.messages');
var sendForm = document.querySelector('form.send-message');
var sendInput = document.querySelector('form.send-message input');

loginButton.onclick = function () {
    window.username = inputUsername.value
    $.ajax({
        url: '/users/login',
        method: 'post',
        data: {
            username: window.username
        },
        success: function (isReal) {
            if (isReal) {
                chatroomBox.classList.add('show')
            } else {
                alert('Username is wrong')
            }
        }
    })
}

sendForm.onsubmit = function (e) {
    e.preventDefault();
    const message = sendInput.value;
    const username = window.username;
    sendInput.value = '';
    socket.emit('new-msg', {
        username: username,
        message: message
    })
}

var addMessageToChatroom = function (username, name, message) {
    const date = new Date();
    const time = String(date.getHours()).padStart(2, 0) + ':' + String(date.getMinutes()).padStart(2, 0);
    const newMessage = `<li>
        <a href='/users/${username}' target='_new'>
            <img src='/images/users/${username}.jpg' />
        </a>
        <span>${name}</span>
        <p>${message}</p>
        <time>${time}</time>
    </li>`
    messageBox.innerHTML = newMessage + messageBox.innerHTML;
}


var socket = io.connect('/');

socket.on('broadcast message', function (data) {
    addMessageToChatroom(
        data.username,
        data.name,
        data.message
    )
})