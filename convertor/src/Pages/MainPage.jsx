import React from "react";
import { useNavigate } from "react-router-dom";
import teamMember1 from "../assets/teamMember1.png";
import textSpeech from "../assets/textSpeech.png";
import speechText from "../assets/speechText.png";
import Header from "../Components/Header";

const MainPage = () => {
  // Initialize the navigation hook
  const navigate = useNavigate();
  return (
    <section className="w-full min-h-screen  bg-gradient-to-r from-darkColor to-secondary text-white pb-16">
      {/* Header Component */}
      <Header />
      <div className="w-full min-h-screen flex flex-col justify-center items-center mt-16 md:m-0 ">
        {/* Page Header */}
        <header className="text-center mb-12 px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Voice-Text Converter
          </h1>
          <h2 className="text-xl md:text-2xl font-light">
            Transform your voice to text and text to voice effortlessly.
          </h2>
        </header>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 px-4">
          {/* Text to Voice Section */}
          <div
            className="w-full md:w-[300px] h-[300px] flex flex-col justify-center items-center bg-action rounded-lg shadow-lg cursor-pointer transform transition-transform hover:scale-105 p-4"
            onClick={() => navigate("/Converter/speechreader")}
          >
            <img src={textSpeech} alt="anim2" className="h-40" />
            <h1 className="text-2xl font-bold mt-4">Text to Voice</h1>
          </div>
          {/* Voice to Text Section */}
          <div
            className="w-full md:w-[300px] h-[300px] flex flex-col justify-center items-center bg-action rounded-lg shadow-lg cursor-pointer transform transition-transform hover:scale-105 p-4"
            onClick={() => navigate("/Converter/voicetotext")}
          >
            <img src={speechText} alt="anim1" className="h-40" />
            <h1 className="text-2xl font-bold mt-4">Voice to Text</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainPage;
