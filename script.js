// Function to handle speech synthesis using Web Speech API
function fetchResponseUsingWebSpeechAPI(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US'; // Set language
    utterance.rate = 1; // Set rate
    utterance.pitch = 1; // Set pitch

    // Event listeners for feedback
    utterance.onend = function() {
        document.getElementById('response').textContent = 'Speech has finished.';
    };
    utterance.onerror = function(event) {
        console.error('Error occurred during speech synthesis:', event.error);
        document.getElementById('response').textContent = 'Sorry, there was an error with the speech synthesis.';
    };

    // Speak the text
    window.speechSynthesis.speak(utterance);
}

// Function to fetch TTS response from OpenAI
async function fetchOpenAITTSResponse(text) {
    const apiKey = 'YOUR_API_KEY'; // Replace with your OpenAI API key
    const responseElement = document.getElementById('response');

    try {
        const response = await fetch('https://api.openai.com/v1/audio/speech', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: "tts-1",
                input: text,
                voice: "alloy" // Change voice as needed
            })
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const blob = await response.blob(); // Get the audio file as a Blob
        const audioUrl = URL.createObjectURL(blob); // Create a URL for the audio

        // Play the audio
        const audio = new Audio(audioUrl);
        audio.play();

        responseElement.textContent = 'Playing audio from OpenAI TTS...';
    } catch (error) {
        console.error('Error fetching OpenAI TTS response:', error);
        responseElement.textContent = 'Sorry, there was an error fetching the audio.';
    }
}

// Function to handle asking GPT for a response
async function askGPT(question) {
    const apiKey = 'YOUR_API_KEY'; // Replace with your OpenAI API key
    const responseElement = document.getElementById('response');

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: question }],
            })
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        const gptResponse = data.choices[0].message.content; // Get the text response

        responseElement.textContent = gptResponse; // Display GPT response

        // Use selected TTS method
        const ttsMethod = document.getElementById('tts-method').value;
        if (ttsMethod === 'openaiTTS') {
            fetchOpenAITTSResponse(gptResponse); // Use OpenAI TTS
        } else {
            fetchResponseUsingWebSpeechAPI(gptResponse); // Use Web Speech API
        }
        
    } catch (error) {
        console.error('Error fetching GPT response:', error);
        responseElement.textContent = 'Sorry, there was an error fetching the response.';
    }
}

// Event listener for button click
document.getElementById('submit').addEventListener('click', () => {
    const question = document.getElementById('question').value;

    if (question) {
        askGPT(question); // Ask GPT and handle response
        document.getElementById('question').value = ''; // Clear input
    } else {
        alert('Please enter a question.');
    }
});