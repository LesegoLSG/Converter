import React, { useState, useEffect } from "react";
import useVoiceToText from "../Components/useVoiceToText";
import DownloadText from "../Components/DownloadText";
import Header from "../Components/Header";
import ToastNotification, {
  notifySuccess,
  notifyError,
} from "../Components/Reusable/ToastNotification";

const VoiceToTextPage = () => {
  const [textInput, setTextInput] = useState("");

  const { isListening, transcript, startListening, stopListening } =
    useVoiceToText({ continuous: true });

  const startAndStopListening = () => {
    isListening ? stopVoiceInput() : startListening();
  };

  const stopVoiceInput = () => {
    setTextInput(
      (prev) =>
        prev + (transcript.length ? (prev.length ? " " : "") + transcript : "")
    );
    stopListening();
  };

  //Copy the text in the text area or value of "textInput" to the clipboard
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

  //   useEffect(() => {
  //     if (!isListening && transcript) {
  //       setTextInput((prev) => prev + (prev.length ? " " : "") + transcript);
  //     }
  //   }, [transcript, isListening]);

  useEffect(() => {
    console.log("isListening useEffect", isListening);
    console.log("Transcript useEffect", transcript);
    console.log("Text input useEffect", textInput);
  }, [isListening, transcript, textInput]);
  return (
    <div className="w-full min-h-screen  bg-gradient-to-r from-darkColor to-secondary text-white p-4">
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
          {/* Start and stop the speech conversion */}
          <button
            className={`bg-green-600 text-white rounded-lg px-6 py-3 ${
              isListening ? "bg-red-400" : "bg-green-400"
            } hover:scale-105 transform transition-transform`}
            onClick={startAndStopListening}
          >
            {isListening ? "Stop Recording" : "Start Speaking"}
          </button>
          {/* Text area */}
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
          {/* Copy button */}
          <button
            className="bg-action text-white rounded-lg px-6 py-3 hover:scale-105 transform transition-transform"
            onClick={handleCopy}
          >
            Copy to Clipboard
          </button>
          {/* Download Component */}
          <DownloadText text={textInput} />
        </div>
      </div>
      <ToastNotification />
    </div>
  );
};

export default VoiceToTextPage;
