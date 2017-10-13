var loginButton = document.querySelector('button.login')
var inputUsername = document.querySelector('input.username')

loginButton.onclick = function () {
    window.username = inputUsername.value
    
}