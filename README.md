# Text-Speech Converter

Transform your words effortlessly! Whether you need to convert text to speech or speech to text, our versatile and user-friendly app has got you covered.

## Table of contents
* Introduction
* Features
* Usage
* Challenges
* How to run this project
* Technologies used
* Live Demo
* contributions
* License

# Introduction
The **Text-Speech Converter** is a React application that provides users with the ability to convert text to speech and speech to text. It leverages the **react-speech-kit** for voice synthesis and recognition. This user-friendly tool supports various languages and accents, allowing users to customize their experience with adjustable speech rates.

# Features
 **Text to Speech Conversion**
 * Enter text in a text area.
 * Select different language/accents from a dropdown.
 * Adjust speech rate using a range slider.
 * Play and stop speech with toggle button that changes color.


 **Speech to Text Conversion**
 * Start and stop speech recording with a single button.
 * Display transcribed text in a textarea.
 * Copy transcribed text to the clipboard.
 * Download transcribed text as a PDF or Word document.


 # Usage
 **Text to speech**
 1. Navigate to the main page.
 2. Click on the Text-Speech button to go to the text-to-speech page.
 3. Type or paste text into the textarea.
 4. Select the desired language/accent from the dropdown.
 5. Adjust the speech rate using the range slider.
 6. Click the *Start Speaking* button to listen to the text being read aloud. The button icon will turn red while the text is being read.
 7. Click the *Stop Speaking* button to stop the speech. The button icon will turn green.
 8. Copy the text to the clipboard, download it as a PDF, or download it as a Word document using the respective buttons.

 **Speech to Text**
 1. Navigate to the main page.
 2. Click on the Speech-Text button to go to the speech-to-text page.
 3. Click the *Start Recording* button to begin voice input. The button will change to *Stop Recording*.
 4. Speak into your microphone; the transcribed text will appear in the textarea.
 5. Click *Stop Recording* to end voice input. The button will revert to *Start Recording*.
 6. Copy the transcribed text to the clipboard, download it as a PDF, or download it as a Word document using the respective buttons.

 # Challenges
 **Speech Recognition Accuracy:** The accuracy of speech recognition can vary depending on the clarity of speech and background noise.

 **Accents and Languages:** Some accents or languages might not be well-supported or might have limited voice options.

 # How To Run The project
 1. **Clone the repository**: Clone this repository to your local machine using the following command:
```
 git Clone https://github.com/LesegoLSG/Converter.git
```
2. **Import project** : After cloning, import the cloned project to your preferred IDE (I used visual studio to develop this project).
3. **Navigate to the project directory:** : Now make sure you are on the 'convertor' directory.
````
cd convertor
````
4. **Install dependencies** : This project makes use of Node js.
````
npm install or yarn install
````
5. **Start the server** :Start the server using the following command:
```
npm run dev
```

## Live demo
```
https:// to be provided
```

# Technologies Used
**React:** JavaScript library for building user interfaces.

**Tailwind CSS** Utility-first CSS framework.

**react-speech-kit:** Library for speech synthesis and recognition.

**FileSaver.js:** Library for saving files on the client-side.

# Contributing
Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository
2. Create a new branch ( **git checkout -b feature** )
3. Make your changes and commit them (**git commit -am 'Add new feature'**)
4. Push to the branch (**git push origin feature**)
5. Create a pull request

# License
This project is a personal portfolio project and is not intended for commercial use or distribution. All rights reserved by the author.
