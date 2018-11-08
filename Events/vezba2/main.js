var $ourButton = document.querySelector('.firstButton');
var $chat = document.querySelector('.chat');

$ourButton.onclick = function ourChat() {
    var ourMessage =document.querySelector('input');
    var message = ourMessage.value;

    var $paragraf = document.createElement('p');
    $paragraf.textContent = message;

    $chat.appendChild($paragraf);
    ourMessage.value = "";
}