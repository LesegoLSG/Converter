import { useEffect, useRef, useState } from "react";
import ToastNotification, {
  notifySuccess,
  notifyError,
} from "../Components/Reusable/ToastNotification";

const useVoiceToText = (usersOptions) => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const recognitionRef = useRef(null);

  useEffect(() => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Web Speech API is not supported.");
      return;
    }

    recognitionRef.current = new window.webkitSpeechRecognition();
    const recognition = recognitionRef.current;
    recognition.interimResults = usersOptions.interimResults || true;
    recognition.lang = usersOptions.lang || "en-US";
    recognition.continuous = usersOptions.continuous || false;

    recognition.onresult = (event) => {
      let text = "";
      for (let i = 0; i < event.results.length; i++) {
        text += event.results[i][0].transcript;
      }
      setTranscript(text);
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error", event.error);
      setIsListening(false); //isListening is updated on error
    };

    recognition.onend = () => {
      console.log("Recognition ended");
      setIsListening(false);
    };

    return () => {
      recognition.stop();
    };
  }, [usersOptions]);

  const startListening = () => {
    if (recognitionRef.current && !isListening) {
      recognitionRef.current.start();
      setIsListening(true);
      console.log("Recognition started");
    }
  };

  const stopListening = () => {
    if (recognitionRef.current && isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
      console.log("Recognition stopped");
    }
  };

  return {
    isListening,
    transcript,
    startListening,
    stopListening,
  };
};

export default useVoiceToText;
