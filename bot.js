// Chatbot functionality can be implemented using a chatbot platform or service

// Toggle chat window visibility
const chatButton = document.getElementById('chatButton');
const chatWindow = document.getElementById('chatWindow');
chatButton.addEventListener('click', () => {
  chatWindow.style.display = chatWindow.style.display === 'none' ? 'block' : 'none';
});

// Send message
const sendButton = document.getElementById('sendButton');
const messageInput = document.getElementById('messageInput');
const chatMessages = document.getElementById('chatMessages');
sendButton.addEventListener('click', () => {
  const message = messageInput.value;
  if (message.trim() !== '') {
    sendMessage(message);
    messageInput.value = '';
  }
});

// Function to send message and receive response
function sendMessage(message) {
  const chatMessage = document.createElement('div');
  chatMessage.classList.add('chat-message');
  chatMessage.textContent = 'User: ' + message;
  chatMessages.appendChild(chatMessage);

  // Here you can implement the logic to send the message to your chatbot platform and receive the response

  // Example response from the chatbot
  const response = 'Chatbot: Thank you for your message!';

  const botMessage = document.createElement('div');
  botMessage.classList.add('chat-message');
  botMessage.textContent = response;
  chatMessages.appendChild(botMessage);

  // Scroll to the bottom of the chat messages
  chatMessages.scrollTop = chatMessages.scrollHeight;
}
