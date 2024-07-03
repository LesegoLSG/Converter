import React from "react";
import { useNavigate } from "react-router-dom";
import teamMember1 from "../assets/teamMember1.png";
import Logo1 from "../assets/Logo1.png";
import textSpeech from "../assets/textSpeech.png";
import speechText from "../assets/speechText.png";

const MainPage = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full min-h-screen  bg-gradient-to-r from-darkColor to-secondary text-white">
      <header className="w-full h-12  flex justify-start items-center px-4">
        <img src={Logo1} alt="Logo" className="w-32" />
      </header>
      <div className="w-full min-h-screen flex flex-col justify-center items-center ">
        <header className="text-center mb-12 px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Voice-Text Converter
          </h1>
          <h2 className="text-xl md:text-2xl font-light">
            Transform your voice to text and text to voice effortlessly.
          </h2>
        </header>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 px-4">
          {/* Voice to Text */}
          <div
            className="w-full md:w-[300px] h-[300px] flex flex-col justify-center items-center bg-action rounded-lg shadow-lg cursor-pointer transform transition-transform hover:scale-105 p-4"
            onClick={() => navigate("/voicetotext")}
          >
            <img src={speechText} alt="anim1" className="h-40" />
            <h1 className="text-2xl font-bold mt-4">Voice to Text</h1>
          </div>
          {/* Text to Voice */}
          <div
            className="w-full md:w-[300px] h-[300px] flex flex-col justify-center items-center bg-action rounded-lg shadow-lg cursor-pointer transform transition-transform hover:scale-105 p-4"
            onClick={() => navigate("/speechreader")}
          >
            <img src={textSpeech} alt="anim2" className="h-40" />
            <h1 className="text-2xl font-bold mt-4">Text to Voice</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainPage;
