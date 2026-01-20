// ============================================
// MediSense AI - Chatbot Logic
// ============================================

let conversationState = {
    stage: 'greeting', // greeting, collecting, confirming, complete
    symptoms: [],
    messageHistory: []
};

// Initialize chatbot
document.addEventListener('DOMContentLoaded', () => {
    const sendBtn = document.getElementById('send-btn');
    const userInput = document.getElementById('user-input');
    const messagesContainer = document.getElementById('chat-messages');

    // Send welcome message
    addBotMessage(getTranslation('chatbot.welcome'));

    // Send message on button click
    if (sendBtn) {
        sendBtn.addEventListener('click', sendMessage);
    }

    // Send message on Enter key
    if (userInput) {
        userInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
});

// Send user message
function sendMessage() {
    const userInput = document.getElementById('user-input');
    const message = userInput.value.trim();

    if (message === '') return;

    // Add user message to chat
    addUserMessage(message);

    // Clear input
    userInput.value = '';

    // Process message and generate response
    processUserMessage(message);
}

// Add bot message to chat with typing indicator and timestamps
function addBotMessage(message, suggestions = []) {
    const messagesContainer = document.getElementById('chat-messages');

    // Show typing indicator
    showTypingIndicator();

    // Simulate typing delay
    setTimeout(() => {
        // Remove typing indicator
        removeTypingIndicator();

        const messageDiv = document.createElement('div');
        messageDiv.className = 'message message-bot';

        const timestamp = getCurrentTime();

        messageDiv.innerHTML = `
        <div class="message-avatar bot-avatar">🤖</div>
        <div class="message-wrapper">
            <div class="message-content">${message}</div>
            <div class="message-timestamp">${timestamp}</div>
        </div>
    `;

        messagesContainer.appendChild(messageDiv);

        // Add suggested responses if provided
        if (suggestions.length > 0) {
            addSuggestedResponses(suggestions);
        }

        scrollToBottom();
        conversationState.messageHistory.push({ role: 'bot', message, timestamp });
    }, 800 + Math.random() * 400); // Random delay for natural feel
}

// Add user message to chat with timestamp and read receipt
function addUserMessage(message) {
    const messagesContainer = document.getElementById('chat-messages');

    const messageDiv = document.createElement('div');
    messageDiv.className = 'message message-user';

    const timestamp = getCurrentTime();

    messageDiv.innerHTML = `
        <div class="message-wrapper">
            <div class="message-content">${message}</div>
            <div class="message-meta">
                <span class="message-timestamp">${timestamp}</span>
                <span class="message-status">✓✓</span>
            </div>
        </div>
        <div class="message-avatar user-avatar">👤</div>
    `;

    messagesContainer.appendChild(messageDiv);
    scrollToBottom();

    conversationState.messageHistory.push({ role: 'user', message, timestamp });
}

// Scroll to bottom of chat
function scrollToBottom() {
    const messagesContainer = document.getElementById('chat-messages');
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Show typing indicator
function showTypingIndicator() {
    const messagesContainer = document.getElementById('chat-messages');

    const typingDiv = document.createElement('div');
    typingDiv.className = 'message message-bot typing-indicator-message';
    typingDiv.id = 'typing-indicator';

    typingDiv.innerHTML = `
        <div class="message-avatar bot-avatar">🤖</div>
        <div class="typing-indicator">
            <span></span>
            <span></span>
            <span></span>
        </div>
    `;

    messagesContainer.appendChild(typingDiv);
    scrollToBottom();
}

// Remove typing indicator
function removeTypingIndicator() {
    const typingIndicator = document.getElementById('typing-indicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

// Get current time formatted
function getCurrentTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12; // 0 should be 12
    const minutesStr = minutes < 10 ? '0' + minutes : minutes;

    return `${hours}:${minutesStr} ${ampm}`;
}

// Add suggested response chips
function addSuggestedResponses(suggestions) {
    const messagesContainer = document.getElementById('chat-messages');

    // Remove any existing suggestions
    const existingSuggestions = document.querySelector('.suggestions-container');
    if (existingSuggestions) {
        existingSuggestions.remove();
    }

    const suggestionsDiv = document.createElement('div');
    suggestionsDiv.className = 'suggestions-container';

    suggestions.forEach(suggestion => {
        const chip = document.createElement('button');
        chip.className = 'suggestion-chip';
        chip.textContent = suggestion;
        chip.onclick = () => {
            document.getElementById('user-input').value = suggestion;
            sendMessage();
        };
        suggestionsDiv.appendChild(chip);
    });

    messagesContainer.appendChild(suggestionsDiv);
    scrollToBottom();
}

// Process user message and generate response
function processUserMessage(message) {
    // Extract symptoms from message
    const extractedSymptoms = extractSymptoms(message);

    // Add to symptoms list
    conversationState.symptoms.push(...extractedSymptoms);

    // Generate response based on conversation stage
    setTimeout(() => {
        if (conversationState.stage === 'greeting') {
            conversationState.stage = 'collecting';

            if (extractedSymptoms.length === 0) {
                addBotMessage(
                    getTranslation('chatbot.notFeelingWell'),
                    ['I have a headache', 'Feeling tired', 'I have a fever']
                );
            } else {
                const symptomsText = extractedSymptoms.join(', ');
                const message = getTranslation('chatbot.experiencingSymptoms').replace('{symptoms}', symptomsText);
                addBotMessage(message, ['Yes, anything else?', 'No, that\'s all']);
            }
        } else if (conversationState.stage === 'collecting') {
            if (extractedSymptoms.length > 0) {
                addBotMessage(
                    getTranslation('chatbot.thankYou'),
                    ['I have more symptoms', 'That\'s everything', 'Analyze now']
                );
            } else if (message.toLowerCase().includes('no') || message.toLowerCase().includes('analyze') || message.toLowerCase().includes('that\'s all') || message.toLowerCase().includes('everything')) {
                conversationState.stage = 'confirming';
                confirmAndAnalyze();
            } else {
                addBotMessage(
                    getTranslation('chatbot.describeOther'),
                    ['Actually, analyze now', 'Let me add more']
                );
            }
        } else if (conversationState.stage === 'confirming') {
            if (message.toLowerCase().includes('yes') || message.toLowerCase().includes('correct') || message.toLowerCase().includes('analyze')) {
                addBotMessage(getTranslation('chatbot.analyzingNow'));
                setTimeout(() => {
                    analyzeAndShowResults();
                }, 1500);
            } else {
                conversationState.stage = 'collecting';
                addBotMessage(
                    getTranslation('chatbot.noProblem'),
                    ['Add more symptoms', 'Actually, looks good']
                );
            }
        }
    }, 100);
}

// Extract symptoms from user message
function extractSymptoms(message) {
    const symptoms = [];
    const lowerMessage = message.toLowerCase();

    // Common symptom keywords
    const symptomKeywords = [
        'fever', 'headache', 'cough', 'sore throat', 'runny nose', 'sneezing',
        'fatigue', 'tired', 'nausea', 'vomiting', 'diarrhea', 'pain', 'ache',
        'chills', 'dizzy', 'dizziness', 'weakness', 'congestion', 'stuffed nose',
        'body aches', 'muscle aches', 'chest pain', 'shortness of breath',
        'abdominal pain', 'stomach pain', 'sensitivity to light', 'blurred vision',
        'rapid heartbeat', 'sweating', 'anxiety', 'worry', 'restless',
        'itchy eyes', 'watery eyes', 'rash', 'dehydration', 'thirst',
        'frequent urination', 'tingling', 'slow healing', 'irregular heartbeat'
    ];

    symptomKeywords.forEach(keyword => {
        if (lowerMessage.includes(keyword)) {
            symptoms.push(keyword);
        }
    });

    // Remove duplicates
    return [...new Set(symptoms)];
}

// Confirm symptoms and prepare to analyze
function confirmAndAnalyze() {
    if (conversationState.symptoms.length === 0) {
        addBotMessage(
            getTranslation('chatbot.noSymptomsDetected'),
            ['Let me describe my symptoms', 'Start over']
        );
        conversationState.stage = 'collecting';
        return;
    }

    const uniqueSymptoms = [...new Set(conversationState.symptoms)];
    const symptomsList = uniqueSymptoms.map(s => `• ${s}`).join('\n');

    const message = getTranslation('chatbot.confirmSymptoms').replace('{symptoms}', symptomsList);
    addBotMessage(message, ['Yes, analyze these', 'No, let me correct']);
}

// Analyze symptoms and redirect to results
function analyzeAndShowResults() {
    const uniqueSymptoms = [...new Set(conversationState.symptoms)];

    if (uniqueSymptoms.length === 0) {
        addBotMessage(
            getTranslation('chatbot.needSymptoms'),
            ['Describe my symptoms']
        );
        conversationState.stage = 'collecting';
        return;
    }

    addBotMessage(getTranslation('chatbot.analysisComplete'));

    // Use the prediction function from script.js
    setTimeout(() => {
        showResults(uniqueSymptoms);
    }, 1000);
}
