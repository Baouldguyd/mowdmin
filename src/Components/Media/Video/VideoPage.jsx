import React from "react";
import {  FaYoutube } from "react-icons/fa";

const VideoPage = () => {
  return (
    <div className="aboutpg">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Mukta&display=swap');
      </style>

      <div className=""
      style={{
        display: 'flex',
        flexDirection: 'column'
      }}
      >
        <h2>Watch our Live Programmes</h2>
        <div className="videoContainer">
          
            <div className="vid-box2">
              <div className="playDiv">
                <a href="https://m.youtube.com/@mowdministries.e.vgospelofsalv/streams">
                  <FaYoutube className="playIcon live" />
                  
                </a>
              </div>
            </div>
        </div>

        <h2>Watch Videos on our  Gallery</h2>
        <div className="videoContainer">
          
            <div className="vid-box">
              <div className="playDiv">
                <a href="https://m.youtube.com/@mowdministries.e.vgospelofsalv/videos?app=mobile">
                  <FaYoutube className="playIcon" />
                </a>
              </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default VideoPage;
