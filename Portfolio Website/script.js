// Get the textarea element
var textarea = document.getElementById('user-message');
var botResponses = {
    "hello": "Hi there!",
    "how are you": "I'm doing well, thank you!",
    "goodbye": "Goodbye! Have a great day!",
    "bot": "Yes, I am a bot. How can I assist you?",
    "name": "My name is ChatBot.",
    "help": "How can I assist you? Feel free to ask any questions.",
    "support": 'Ok, <a href="support.html" target="_blank">Click here</a> to visit Support.',
    "news": 'Sure! <a href="https://news.google.com" target="_blank">Click here</a> to visit Google News.',
    "chat gpt": 'Ok, <a href="https://openai.com/blog/chatgpt" target="_blank">Click here</a> to visit chat gpt.'
};

var chatImg = document.getElementById('chat-img');
var chatWindow = document.getElementById('chat-window');

chatImg.addEventListener('click', function () {
    chatWindow.classList.toggle('hide');
});


function sendMessage() {
    var userMessage = document.getElementById('user-message').value.trim();

    if (userMessage === '') {
        displayMessage('Bot', 'Please enter a message.');
        return;
    }
    displayMessage('User', userMessage);
    processUserMessage(userMessage);
    document.getElementById('user-message').value = '';
}
var textarea = document.getElementById('user-message');
textarea.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        sendMessage();
    }

});
function processUserMessage(message) {
    var response = getBotResponse(message);
    displayMessage('Bot', response);
}

function getBotResponse(userMessage) {
    userMessage = userMessage.toLowerCase();
    var response = "In current phrase, I am learning so I didnt know these questions.";

    for (var key in botResponses) {
        if (userMessage.includes(key)) {
            response = botResponses[key];
            break;
        }
    }

    return response;
}

function displayMessage(sender, message) {
    var chatDisplay = document.getElementById('chat-display');
    var messageElement = document.createElement('div');
    messageElement.innerHTML = '<strong>' + sender + ':</strong> ' + message;
    chatDisplay.appendChild(messageElement);
    chatDisplay.scrollTop = chatDisplay.scrollHeight;
}
textarea.value = ''
function toggleChat() {
    var chatDisplay = document.getElementById('chat-container');
    chatDisplay.classList.toggle('show');
}

function processUserMessage(message) {
    var response = getBotResponse(message);
    if (response === 'google-news') {
        redirectToGoogleNews();
    } else {
        displayMessage('Bot', response);
    }
}

function closeChat() {
    var chatDisplay = document.getElementById('chat-container');
    chatDisplay.classList.remove('show');
}

function redirectToGoogleNews() {
    window.location.href = 'https://news.google.com/';
}

