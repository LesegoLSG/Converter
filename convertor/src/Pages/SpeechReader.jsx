import React, { useState, useEffect, useRef } from "react";
import { useSpeechSynthesis } from "react-speech-kit";
import Loader from "../Components/Reusable/Loader";
import { FaMicrophone, FaMicrophoneSlash } from "react-icons/fa";
import Header from "../Components/Header";

const SpeechReader = () => {
  // Destructuring the functionalities from the useSpeechSynthesis hook
  const { speak, cancel, speaking, voices } = useSpeechSynthesis();

  // State to store the text input
  const [textInput, setTextInput] = useState("");

  // State to store the selected voice index
  const [voiceIndex, setVoiceIndex] = useState("");

  // State to store the speech rate
  const [rate, setRate] = useState(1);

  // Reference to keep track of the text input while restarting
  const textRef = useRef("");

  // Function to handle speaking the text
  const handleSpeak = () => {
    speak({ text: textInput, voice: voices[voiceIndex], rate: rate });
    textRef.current = textInput;
  };

  // Function to stop speaking
  const handleStopSpeak = () => {
    cancel();
  };

  // Function to handle rate change
  const handleRateChange = (e) => {
    setRate(parseFloat(e.target.value));
  };

  // Restart speech with new rate if it's currently speaking
  useEffect(() => {
    if (speaking) {
      cancel(); // Cancel current speech
      speak({ text: textRef.current, voice: voices[voiceIndex], rate: rate }); // Restart speech with new rate
    }
  }, [rate, speaking, voices, voiceIndex, speak, cancel]);

  // Cleanup function to stop speech when navigating away
  useEffect(() => {
    return () => {
      if (speaking) {
        cancel();
      }
    };
  }, [speaking, cancel]);

  return (
    <div className="w-full min-h-screen  bg-gradient-to-r from-darkColor to-secondary text-white p-4">
      {/* Header Component */}
      <Header />
      <div className="w-full min-h-screen flex flex-col justify-center items-center">
        {/* {speaking && <Loader />} */}
        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold">
            Text to Speech Converter
          </h1>
          <p className="text-lg md:text-xl mt-2">
            Convert your text to speech with ease
          </p>
        </header>
        <div className="w-full max-w-4xl flex flex-col justify-center items-center gap-y-4">
          {/* Text area to input the text */}
          <textarea
            className="w-full max-w-4xl min-h-[200px] border border-blue-400 p-4 text-black rounded-lg"
            onChange={(e) => {
              setTextInput(e.target.value);
              textRef.current = e.target.value;
            }}
            placeholder="Enter text to convert..."
          />
          {/* Voice selection dropdown */}
          <select
            className="w-full max-w-4xl border border-blue-400 p-2 text-black rounded-lg"
            value={voiceIndex || ""}
            onChange={(e) => setVoiceIndex(e.target.value)}
          >
            <option value="">Select voice</option>
            {voices.map((item, index) => (
              <option key={item.name} value={index}>
                {item.name}
              </option>
            ))}
          </select>
          {/* Rate selection slider */}
          <div className="w-full max-w-4xl flex items-center">
            <input
              type="range"
              min="0.1"
              max="2"
              step="0.1"
              value={rate}
              onChange={handleRateChange}
              className="flex-1 text-action"
            />
            <span className="text-xl font-bold ml-4">Rate: {rate}</span>
          </div>
          {/* Speak/Stop button */}
          <button
            className={`py-2 px-6 rounded  text-white hover:scale-105 transform transition-transform`}
            onClick={speaking ? handleStopSpeak : handleSpeak}
          >
            {speaking ? (
              <FaMicrophoneSlash size={30} className="text-red-400" />
            ) : (
              <FaMicrophone size={30} className="text-green-400" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpeechReader;
