import React from 'react'
import { FloatButton } from "antd";
import {SoundOutlined} from '@ant-design/icons'
const AudioBible = ( {text} ) => {

    const handleSpeak = () => {
        const speechSynthesis = window.speechSynthesis;
        const speechText = new SpeechSynthesisUtterance(text);
        speechSynthesis.cancel();
        speechSynthesis.speak(speechText)
    }

    // const AudioIcon = () => <FloatButton onClick={() => console.log("onClick")} icon ={<SoundOutlined />} />;

  return (
    <>
    <FloatButton onClick={handleSpeak} icon ={<SoundOutlined />} />;
    </>
  )
}

export default AudioBible;