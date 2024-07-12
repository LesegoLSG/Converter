import React, { useState, useEffect } from "react";
import useVoiceToText from "../Components/useVoiceToText";
import DownloadText from "../Components/DownloadText";
import Header from "../Components/Header";
import ToastNotification, {
  notifySuccess,
  notifyError,
} from "../Components/Reusable/ToastNotification";
import AlertModal from "../Components/Reusable/AlertModal";

const VoiceToTextPage = () => {
  // State to store the text input
  const [textInput, setTextInput] = useState("");

  // State to manage the modal visibility
  const [showModal, setShowModal] = useState(true);

  // Custom hook for voice to text functionality
  const { isListening, transcript, startListening, stopListening } =
    useVoiceToText({ continuous: true });

  // Function to start and stop listening
  const startAndStopListening = () => {
    isListening ? stopVoiceInput() : startListening();
  };

  // Function to stop voice input and update the text input
  const stopVoiceInput = () => {
    setTextInput(
      (prev) =>
        prev + (transcript.length ? (prev.length ? " " : "") + transcript : "")
    );
    stopListening();
  };

  // Function to copy the text to the clipboard and show a notification
  const handleCopy = () => {
    navigator.clipboard
      .writeText(textInput)
      .then(() => {
        notifySuccess("Text copied to the clipboard");
      })
      .catch((err) => {
        notifyError("Failed to copy text to the clipboard");
      });
  };

  return (
    <div className="w-full min-h-screen  bg-gradient-to-r from-darkColor to-secondary text-white p-4">
      {/* Header Component */}
      <Header />
      <div className="w-full min-h-screen flex flex-col justify-center items-center ">
        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold">
            Voice to Text Converter
          </h1>
          <p className="text-lg md:text-xl mt-2">
            Convert your speech to text effortlessly
          </p>
        </header>
        <div className="w-full max-w-4xl flex flex-col justify-center items-center gap-y-4">
          {/* Button to start and stop the speech conversion */}
          <button
            className={`bg-green-600 text-white rounded-lg px-6 py-3 ${
              isListening ? "bg-red-400" : "bg-green-400"
            } hover:scale-105 transform transition-transform`}
            onClick={startAndStopListening}
          >
            {isListening ? "Stop Recording" : "Start Speaking"}
          </button>
          {/* Text area to display the transcribed text */}
          <textarea
            className="w-full max-w-4xl min-h-[200px] border border-blue-400 p-4 text-black rounded-lg"
            disabled={isListening}
            placeholder="Ready to listen..."
            value={
              isListening
                ? textInput +
                  (transcript.length
                    ? (textInput.length ? " " : "") + transcript
                    : "")
                : textInput
            }
            onChange={(e) => {
              setTextInput(e.target.value);
            }}
          />
          {/* Button to copy the text to the clipboard */}
          <button
            className="bg-action text-white rounded-lg px-6 py-3 hover:scale-105 transform transition-transform"
            onClick={handleCopy}
          >
            Copy to Clipboard
          </button>
          {/* Download Component to download the text as PDF or Word */}
          <DownloadText text={textInput} />
        </div>
      </div>
      {/* Toast Notification Component */}
      <ToastNotification />
      {/* Modal component */}
      <AlertModal
        showModal={showModal}
        setShowModal={setShowModal}
        message="For the best experience, please use this feature on modern browsers like Chrome, Firefox, or Edge. Some functionalities might not work as expected on other browsers."
      />
    </div>
  );
};

export default VoiceToTextPage;
