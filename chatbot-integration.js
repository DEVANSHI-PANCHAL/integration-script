// chatbot-integration.js

// Function to append the chatbot HTML, CSS, and JavaScript to the target website
function loadChatbot() {
    // Create a <script> element to load the chatbot JavaScript
    var scriptElement = document.createElement('script');
    scriptElement.src = 'https://devanshi-panchal.github.io/chat-plugin/chatbot.js';

    // Append the <script> element to the <head> of the target website
    document.head.appendChild(scriptElement);
}

// Call the loadChatbot function to load the chatbot onto the target website
loadChatbot();
