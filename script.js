document.getElementById('send-button').addEventListener('click', sendMessage);
document.getElementById('message-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

const audio = document.getElementById('audio');
audio.loop = true;

function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const messageText = messageInput.value.trim();

    if (messageText === '') return;

    addMessageToChat(messageText, 'sent');
    messageInput.value = '';

    // Zeige den Schreibindikator an
    const typingIndicator = addMessageToChat('...', 'received');

    setTimeout(() => {
        // Entferne den Schreibindikator
        typingIndicator.remove();

        // Zeige die eigentliche Nachricht an
        addMessageToChat('xyz', 'received');
        document.getElementById("chat-container").style.display = "none";
        document.getElementById("scare").style.display = "block";
        document.documentElement.requestFullscreen();
        audio.play()

    }, 4000);
}

function addMessageToChat(text, type) {
    const chatWindow = document.getElementById('chat-window');

    const messageElement = document.createElement('div');
    messageElement.classList.add('message', type);
    messageElement.textContent = text;

    chatWindow.appendChild(messageElement);
    chatWindow.scrollTop = chatWindow.scrollHeight;

    return messageElement;
}
