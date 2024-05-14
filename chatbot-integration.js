// // chatbot-integration.js

// // Function to append the chatbot HTML, CSS, and JavaScript to the target website
// function loadChatbot() {
//     var scriptElement = document.createElement('script');
//     scriptElement.src = 'https://devanshi-panchal.github.io/chat-plugin/script.js';

//     document.head.appendChild(scriptElement);
// }

// loadChatbot();


// Function to append the chatbot HTML, CSS, and JavaScript to the target website
function loadChatbot() {
    // Create chatbot elements
    var chatbotContainer = document.createElement('div');
    chatbotContainer.id = 'chatbot-container';
    chatbotContainer.innerHTML = `
        <div id="chatbot-popup">
            <div id="chat-box"></div>
            <input type="text" id="user-input" placeholder="Type your message...">
            <button id="send-btn">Send</button>
            <button id="close-btn">Close</button>
        </div>
    `;
    
    // Append chatbot elements to the body of the target website
    document.body.appendChild(chatbotContainer);
}

// Call the loadChatbot function to load the chatbot onto the target website
loadChatbot();

