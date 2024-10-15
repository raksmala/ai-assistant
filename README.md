# AI Assistant with Text-to-Speech

This project implements a web-based AI assistant that allows users to ask questions and receive responses using OpenAI's GPT-3.5 model. Additionally, the assistant can respond with synthesized speech using either OpenAI's text-to-speech (TTS) API or the browser's built-in Web Speech API.

## Features

- Ask questions to the GPT-3.5 model.
- Get spoken responses via:
  - OpenAI's TTS API.
  - Browser's built-in Web Speech API.
- Simple and intuitive user interface.

## Technologies Used

- HTML
- CSS
- JavaScript
- OpenAI API
- Web Speech API

## Prerequisites

- An active [OpenAI API key](https://platform.openai.com/account/api-keys).
- A modern web browser that supports the Web Speech API (e.g., Google Chrome, Firefox).

## Getting Started

### Clone the Repository

```
git clone https://github.com/yourusername/ai-assistant.git  
cd ai-assistant
```

### Setup

1. **Open `script.js`** and replace `YOUR_API_KEY` with your actual OpenAI API key.
  
2. **Run the application**:
   - You can simply open the `index.html` file in a web browser.
   - Alternatively, if you want to use a local server, you can use tools like [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) or any other local server setup.

## Usage

1. Open the application in your web browser.
2. Type your question in the input box or use the planned speech-to-text feature (coming soon!).
3. Select your preferred TTS method from the dropdown:
   - **OpenAI TTS**: Uses OpenAI's TTS API to generate audio.
   - **Web Speech API**: Uses the browser's built-in speech synthesis capabilities.
4. Click the "Ask" button to submit your question.
5. Listen to the AI's spoken response!

## Future Updates

- **Speech-to-Text Input**: We plan to implement a feature that allows users to input questions using voice commands, converting speech to text for a more interactive experience. This will leverage the Web Speech API’s Speech Recognition capabilities.
- **Voice Customization**: Users will be able to choose different voices for the TTS responses from OpenAI's API, enhancing the personalization of the responses.
- **Enhanced UI/UX**: Future iterations will include a more polished user interface, with better accessibility features and responsive design.

## Project Structure

The project structure is organized as follows:

```
ai-assistant/
│
├── index.html        # Main HTML file
├── style.css         # CSS styles for the application
└── script.js         # JavaScript functionality
```

## Troubleshooting

- If you encounter CORS issues, ensure your application is running on a server.
- Make sure your OpenAI API key is valid and has the necessary permissions.
- Check browser compatibility for the Web Speech API.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [OpenAI](https://openai.com/) for providing the GPT and TTS APIs.
- The contributors and community for their support.

## Contact

For any questions or suggestions, feel free to reach out!