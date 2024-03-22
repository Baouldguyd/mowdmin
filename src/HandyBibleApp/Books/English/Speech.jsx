import { AudioFilled, SoundFilled } from "@ant-design/icons";
import React from "react";

const Speech = ({ verses }) => {
  const handleSpeak = (text) => {
    const speechSynthesis = window.speechSynthesis;
    const speechText = new SpeechSynthesisUtterance(text);
    speechSynthesis.cancel(); // Stop speaking previous text
    speechSynthesis.speak(speechText);
  };

  return (
    <div className="bibleText">
      {verses.map((verse, index) => (
        <div key={index}>
          <p>
            {verse.verse} {verse.text}
            <button onClick={() => handleSpeak(verse.text)}>
              <SoundFilled/>
            </button>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Speech;
