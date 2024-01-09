import React, { useState, useRef, useEffect } from "react";
import torahAudio from "../../../Assets/audio/torah.mp3";
import mowdLogo from "../../../Assets/newmowdlogo.png";
import PlayButton from "./PlayButton";

function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioSrc, setAudioSrc] = useState("");
  const audioElement = useRef(null);
  const gifRef = useRef(null);
  const logoRef = useRef(null);
  const [gifPaused, setGifPaused] = useState(false);
  const [rotationPaused, setRotationPaused] = useState(false);

  const togglePlay = (src) => {
    if (audioSrc === src) {
      setIsPlaying(!isPlaying);
    } else {
      setAudioSrc(src);
      setIsPlaying(true);
    }
  };

  const handlePlayPause = () => {
    if (audioElement.current.paused) {
      audioElement.current.play();
      setIsPlaying(true);
      setGifPaused(false);
      setRotationPaused(false);
    } else {
      audioElement.current.pause();
      setIsPlaying(false);
      setGifPaused(true);
      setRotationPaused(true);
    }
  };

  useEffect(() => {
    const gif = gifRef.current;
    const logo = logoRef.current;

    if (gif && logo) {
      if (gifPaused) {
        gif.classList.add("paused");
      } else {
        gif.classList.remove("paused");
      }

      if (rotationPaused) {
        logo.style.animationPlayState = "paused";
      } else {
        logo.style.animationPlayState = "running";
      }
    }
  }, [gifPaused, rotationPaused]);

  return (
    <div className="aboutpg App fade-in appear audioDiv">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Mukta&display=swap');
          .paused {
            animation-play-state: paused !important;
          }
          .rotate {
            animation: rotation 2s infinite linear;
          }
          @keyframes rotation {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
      <h1>Audio Player</h1>

      <div className="audioPlayerDiv">
        <div className="audioCoverImg">
          <img
            src={mowdLogo}
            alt=""
            style={{
              width: "100%",
              height: "100%",
            }}
            ref={logoRef}
            className={rotationPaused ? "" : "rotate"}
          />
        </div>

        <div className="artistName">
          <iframe
            title="GIF"
            src="https://gifer.com/embed/YdBO"
            frameBorder="0"
            width="100%"
            height="100%"
            ref={gifRef}
          ></iframe>
        </div>
      </div>

      <div className="audio-controls">
        <audio
          ref={audioElement}
          src={audioSrc}
          controlsList="nodownload noremoteplayback nofullscreen"
          autoPlay={isPlaying}
        />

        

        <button onClick={handlePlayPause} className='playerBtn'>
          {/* {isPlaying ? "Pause" : "Play"} */}

          <PlayButton/>
          <button className='playerBtn' onClick={() => togglePlay(torahAudio)}>
          {/* {isPlaying ? "Pause" : "Play"}  */}
        </button>
          
        </button>



        
      </div>

      

          
        
    </div>
  );
}

export default AudioPlayer;
